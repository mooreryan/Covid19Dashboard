module Main exposing (..)

import Array exposing (Array)
import Browser
import Browser.Events as BE
import Count exposing (Count)
import Csv exposing (Csv)
import Dict exposing (Dict)
import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Http
import Json.Decode as D exposing (Decoder)
import Json.Encode as E
import PopulationData as PD
import Ports
import Set exposing (Set)
import Task
import Time
import TimeSeries as TS
import Utils
import VegaLite as VL



-- TODO
--
-- [ ] Update timezone to use the user's current time zone.
-- [ ] Use a key that is guaranteed to be unique...FIPS maybe?
-- [ ] Don't store both the raw data and the parsed data.
-- [ ] Every 24 hours, auto fetch data.
-- [ ] Add an option to view data aggregated by state.


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- MODEL


type alias Flags =
    { startingData : Maybe String
    , windowWidth : Int
    , windowHeight : Int
    }


type alias Model =
    { data : String -- this will be CSV
    , zone : Time.Zone
    , lastDataFetchTime : Time.Posix
    , currentState : Maybe TS.State
    , currentCounty : Maybe TS.County
    , selectedKeys : Set TS.Key
    , parsedData : TS.Data
    , weightCounts : Bool
    , windowWidth : Int
    , windowHeight : Int
    }


{-| The stuff you read from localStorage
-}
type alias StartingData =
    { data : String
    , lastDataFetchTime : Time.Posix
    }


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        startingData =
            case flags.startingData of
                Just startData ->
                    decodeStartingData startData

                Nothing ->
                    -- There is no starting data, so we will need to fetch some
                    -- new data! For now, just give this empty thing.
                    StartingData
                        ""
                        (Time.millisToPosix 0)
    in
    ( { data = startingData.data
      , zone = Time.utc
      , lastDataFetchTime = startingData.lastDataFetchTime
      , currentState = Nothing
      , currentCounty = Nothing
      , selectedKeys = Set.empty
      , parsedData = TS.parse startingData.data
      , weightCounts = False
      , windowWidth = flags.windowWidth
      , windowHeight = flags.windowHeight
      }
    , Task.perform
        CheckFetchData
        Time.now
    )



-- UPDATE


type Msg
    = GotWindowResize Int Int
    | FetchDataClick
    | CheckFetchData Time.Posix
    | FetchData
    | GotData (Result Http.Error String)
    | SaveData
    | AddKey
    | RemoveKey TS.Key
    | RemoveAllKeys
    | ChangeCounty TS.County
    | ChangeState TS.State
    | ToggleWeightCounts


{-| TODO change this to the actual data fetching
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotWindowResize newWidth newHeight ->
            let
                newModel =
                    { model
                        | windowWidth = newWidth
                        , windowHeight = newHeight
                    }
            in
            ( newModel
            , Ports.sendToVegaLite (vegaLiteSpec newModel)
            )

        FetchDataClick ->
            ( model, Task.perform CheckFetchData Time.now )

        CheckFetchData newTime ->
            let
                elapsedTime =
                    Utils.getElapsedTime model.lastDataFetchTime newTime

                doDataFetch =
                    Time.posixToMillis elapsedTime > Utils.dataFetchRateLimit
            in
            if doDataFetch then
                update FetchData { model | lastDataFetchTime = newTime }

            else
                ( model, Cmd.none )

        FetchData ->
            ( model
            , Http.get
                { url = Utils.timeSeriesDataUrl
                , expect = Http.expectString GotData
                }
            )

        GotData result ->
            case result of
                Err _ ->
                    ( model, Cmd.none )

                Ok data ->
                    update SaveData
                        { model
                            | data = data
                            , parsedData = TS.parse data
                        }

        SaveData ->
            ( model
            , Cmd.batch
                [ saveData model

                -- TODO: not sure why this gets sent here...
                , Ports.sendToVegaLite (vegaLiteSpec model)
                ]
            )

        AddKey ->
            case ( model.currentState, model.currentCounty ) of
                ( Just currentState, Just currentCounty ) ->
                    let
                        newKey =
                            TS.mkKey currentState currentCounty

                        newKeys =
                            Set.insert newKey model.selectedKeys

                        weightCounts =
                            if allCountiesHavePopData newKeys == False then
                                -- Some counties are missing population data so
                                -- force `weightCounts` to False.
                                False

                            else
                                model.weightCounts

                        newModel =
                            { model
                                | selectedKeys = newKeys
                                , weightCounts = weightCounts
                            }
                    in
                    ( newModel
                    , Ports.sendToVegaLite (vegaLiteSpec newModel)
                    )

                ( _, _ ) ->
                    ( model, Cmd.none )

        RemoveKey key ->
            let
                newModel =
                    { model | selectedKeys = Set.remove key model.selectedKeys }
            in
            ( newModel, Ports.sendToVegaLite (vegaLiteSpec newModel) )

        RemoveAllKeys ->
            ( { model | selectedKeys = Set.empty }, Cmd.none )

        ChangeCounty newCounty ->
            let
                maybeCounty =
                    if newCounty == Utils.defaultOptionText then
                        Nothing

                    else
                        Just newCounty
            in
            ( { model | currentCounty = maybeCounty }, Cmd.none )

        ChangeState newState ->
            let
                maybeState =
                    if newState == Utils.defaultOptionText then
                        Nothing

                    else
                        Just newState
            in
            ( { model
                | currentState = maybeState
                , currentCounty = Nothing
              }
            , Cmd.none
            )

        ToggleWeightCounts ->
            let
                newModel =
                    { model | weightCounts = not model.weightCounts }
            in
            ( newModel, Ports.sendToVegaLite (vegaLiteSpec newModel) )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    BE.onResize (\width height -> GotWindowResize width height)



-- VIEW


view : Model -> Html Msg
view model =
    H.div [ HA.class "pure-g" ]
        [ H.div [ HA.class "pure-u-1 pure-u-lg-1-3" ]
            [ H.h1 []
                [ H.text "COVID-19 Dashboard" ]
            , viewLastDataFetchTime model
            , H.h2 [] [ H.text "Select Data" ]
            , H.p []
                [ H.text "Select a state and county, then click "
                , H.strong [] [ H.text "'Add' " ]
                , H.text "to view data."
                ]
            , H.p []
                [ H.text "Try adding multiple counties to the chart and clicking the "
                , H.strong [] [ H.text "'Weight counts by population' " ]
                , H.text "button for comparison."
                ]
            , viewStateCountyForm model
            , viewSelectedKeys model
            ]
        , H.div [ HA.class "pure-u-1 pure-u-lg-2-3" ]
            [ viewConfirmedCaseChartContainer model
            ]
        ]


viewStateCountyForm : Model -> Html Msg
viewStateCountyForm model =
    H.div [ HA.class "pure-form pure-form-stacked" ]
        [ H.fieldset []
            [ H.label
                [ HA.for "state-selector" ]
                [ H.text "State/Province" ]
            , viewStateSelector
                model
                "state-selector"
            , H.label
                [ HA.for "county-selector" ]
                [ H.text "County/Region" ]
            , viewCountySelector
                model
                "county-selector"
            , viewAddCountyButton model "add-county"
            , viewClearAllCountiesButton model "clear-all"
            ]
        ]


viewSelectedKeys : Model -> Html Msg
viewSelectedKeys model =
    let
        eventDecoder : D.Decoder Msg
        eventDecoder =
            D.map RemoveKey <|
                D.at
                    [ "currentTarget"
                    , "dataset"
                    , "key"
                    ]
                    D.string

        selectedKeys : List TS.Key
        selectedKeys =
            Set.toList model.selectedKeys

        keys : List (Html Msg)
        keys =
            List.map
                (\k ->
                    H.li
                        [ HA.attribute "data-key" k
                        , HE.on "dblclick" eventDecoder
                        ]
                        [ H.text k ]
                )
                selectedKeys

        contents : List (Html Msg)
        contents =
            if Set.isEmpty model.selectedKeys then
                []

            else
                [ H.h3 []
                    [ H.text "Selected Counties" ]
                , H.p []
                    [ H.text "Double click on a county to remove it from chart." ]
                , H.ul []
                    keys
                ]
    in
    H.div [] contents


viewStateSelector : Model -> String -> Html Msg
viewStateSelector model id =
    let
        states : List TS.State
        states =
            Dict.keys model.parsedData.stateCounties

        options =
            [ H.option
                [ HA.value Utils.defaultOptionText
                , HA.selected True
                ]
                [ H.text Utils.defaultOptionText ]
            ]
                ++ List.map
                    (\state ->
                        H.option
                            [ HA.value state
                            ]
                            [ H.text state ]
                    )
                    states
    in
    H.select
        [ HA.name id
        , HA.id id
        , HE.onInput ChangeState
        ]
        options


viewCountySelector : Model -> String -> Html Msg
viewCountySelector model id =
    let
        currentState =
            model.currentState

        counties : List TS.County
        counties =
            case currentState of
                Just state ->
                    case Dict.get state model.parsedData.stateCounties of
                        Just county ->
                            county

                        Nothing ->
                            [ "" ]

                Nothing ->
                    [ "" ]

        defaultOption =
            case model.currentCounty of
                Just _ ->
                    H.option
                        [ HA.value Utils.defaultOptionText ]
                        [ H.text Utils.defaultOptionText ]

                Nothing ->
                    H.option
                        [ HA.value Utils.defaultOptionText
                        , HA.selected True
                        ]
                        [ H.text Utils.defaultOptionText ]

        countyOptions =
            List.map
                (\county ->
                    H.option
                        [ HA.value county
                        ]
                        [ H.text county ]
                )
                counties

        options =
            [ defaultOption ] ++ countyOptions
    in
    H.select
        [ HA.name id
        , HA.id id
        , HE.onInput ChangeCounty
        ]
        options


allCountiesHavePopData : Set TS.Key -> Bool
allCountiesHavePopData keys =
    keys
        |> Set.toList
        |> List.map (\k -> Dict.member k PD.populationData)
        |> List.all ((==) True)


viewWeightByPopulationSelector : Model -> Html Msg
viewWeightByPopulationSelector model =
    -- TODO this should only trigger if all the counties have population data.
    if allCountiesHavePopData model.selectedKeys then
        H.div []
            [ H.label []
                [ H.input
                    [ HA.type_ "checkbox"
                    , HE.onClick ToggleWeightCounts
                    , HA.checked model.weightCounts
                    ]
                    []
                , H.text " Weight counts by population"
                ]
            ]

    else
        H.div []
            [ H.text "Not all selected counties have population data."
            ]


viewAddCountyButton : Model -> String -> Html Msg
viewAddCountyButton model id =
    let
        isDisabled =
            case ( model.currentState, model.currentCounty ) of
                ( Just currentState, Just currentCounty ) ->
                    let
                        currentKey =
                            TS.mkKey currentState currentCounty
                    in
                    Set.member currentKey model.selectedKeys

                ( _, _ ) ->
                    True
    in
    H.button
        [ HA.class "pure-button pure-button-primary button-margin"
        , HA.disabled isDisabled
        , HA.id id
        , HE.onClick AddKey
        ]
        [ H.text "Add" ]


viewClearAllCountiesButton : Model -> String -> Html Msg
viewClearAllCountiesButton model id =
    let
        isDisabled =
            Set.isEmpty model.selectedKeys
    in
    H.button
        [ HA.class "pure-button button-margin"
        , HA.id id
        , HA.disabled isDisabled
        , HE.onClick RemoveAllKeys
        ]
        [ H.text "Remove All" ]


viewLastDataFetchTime : Model -> Html Msg
viewLastDataFetchTime model =
    let
        hour =
            Time.toHour model.zone model.lastDataFetchTime
                |> String.fromInt
                |> String.padLeft 2 '0'

        minute =
            Time.toMinute model.zone model.lastDataFetchTime
                |> String.fromInt
                |> String.padLeft 2 '0'

        second =
            Time.toSecond model.zone model.lastDataFetchTime
                |> String.fromInt
                |> String.padLeft 2 '0'

        timeSeriesGitHubLink =
            H.a
                [ HA.href Utils.timeSeriesDataGitHubUrl ]
                [ H.text "JHU CSSE" ]

        popDataLink =
            H.a
                [ HA.href Utils.popDataSourceUrl ]
                [ H.text "USDA ERS" ]
    in
    H.div [ HA.class "small-font gray-font" ]
        [ H.p []
            [ H.text "Last data fetch from "
            , timeSeriesGitHubLink
            , H.text (": " ++ hour ++ ":" ++ minute ++ ":" ++ second ++ " (UTC).  ")
            ]
        , H.p []
            [ H.text "Population data from "
            , popDataLink
            , H.text "."
            ]
        ]


viewFetchDataButton : Model -> Html Msg
viewFetchDataButton model =
    H.div [] [ H.button [ HE.onClick FetchDataClick ] [ H.text "Fetch Data!" ] ]


vegaLiteSpec : Model -> VL.Spec
vegaLiteSpec model =
    let
        currentKey =
            case List.head (Set.toList model.selectedKeys) of
                Just selectedKey ->
                    selectedKey

                Nothing ->
                    -- pretty sure this nothing should never happen
                    -- no idea what the default should be
                    Utils.defaultOptionText

        dataRecord : TS.DataRecord
        dataRecord =
            case Dict.get currentKey model.parsedData.dataRecords of
                Just rec ->
                    rec

                Nothing ->
                    TS.defaultDataRecord

        dataRecords : List TS.DataRecord
        dataRecords =
            List.map
                (\key ->
                    case Dict.get key model.parsedData.dataRecords of
                        Just rec ->
                            rec

                        Nothing ->
                            TS.defaultDataRecord
                )
                (Set.toList model.selectedKeys)

        vegaLiteData : TS.VegaLiteData
        vegaLiteData =
            TS.mkVegaLiteData model.weightCounts dataRecords

        yAxisTitle =
            if model.weightCounts then
                "Confirmed Cases\n(per 100k People)"

            else
                "Confirmed Cases"

        d =
            -- TODO probably check that the dates and cases have the same number
            VL.dataFromColumns []
                << VL.dataColumn "Date" (VL.strs vegaLiteData.dates)
                << VL.dataColumn "Confirmed Cases"
                    (vegaLiteData.confirmedCases
                        |> VL.nums
                    )
                << VL.dataColumn "State, County" (VL.strs vegaLiteData.keys)

        enc =
            VL.encoding
                << VL.position VL.X
                    [ VL.pName "Date"
                    , VL.pMType VL.Temporal
                    , VL.pAxis
                        [ VL.axLabelAngle 0
                        , VL.axLabelExpr "substring(datum.label, 0, 3)"
                        ]

                    -- , VL.pTimeUnit VL.monthDate
                    ]
                << VL.position VL.Y
                    [ VL.pName "Confirmed Cases"
                    , VL.pMType VL.Quantitative
                    , VL.pTitle yAxisTitle
                    ]
                << VL.color
                    [ VL.mName "State, County"
                    , VL.mLegend
                        [ VL.leDirection VL.moVertical
                        ]
                    ]

        cfg =
            VL.configure
                << VL.configuration
                    (VL.coAxis
                        [ VL.axcoLabelFontSize 16
                        , VL.axcoTitleFontSize 18
                        ]
                    )
                << VL.configuration
                    (VL.coLegend
                        [ VL.lecoLabelFontSize 14
                        , VL.lecoTitleFontSize 16
                        , VL.lecoSymbolStrokeWidth 3
                        , VL.lecoOrient VL.loBottom
                        ]
                    )

        size =
            getChartSize model.windowWidth
    in
    VL.toVegaLite
        [ VL.width size.width
        , VL.height size.height
        , VL.autosize [ VL.asContent ]
        , cfg []
        , d []
        , VL.line [ VL.maStrokeWidth 3 ]
        , enc []
        ]


type alias Size =
    { width : Float
    , height : Float
    }


getChartSize : Int -> Size
getChartSize width =
    let
        maxChartSize =
            -- 525.0
            600.0

        w =
            min maxChartSize (toFloat width * 0.5)

        -- min maxChartSize (toFloat width * 0.9)
    in
    { width = w, height = w / 1.618 }


viewConfirmedCaseChartContainer : Model -> Html Msg
viewConfirmedCaseChartContainer model =
    if Set.isEmpty model.selectedKeys then
        H.div [] []

    else
        H.div [ HA.class "push-down" ]
            [ H.h1 [] [ H.text "Confirmed Case Data" ]
            , H.div
                [ HA.id "case-count-chart"
                , HA.class "pure-img"
                ]
                []
            , H.h2 [] [ H.text "Options" ]
            , viewWeightByPopulationSelector model
            ]



-- ENCODING/DECODING/SAVING


encodeTimePosix : Time.Posix -> E.Value
encodeTimePosix time =
    time
        |> Time.posixToMillis
        |> E.int


posixTimeDecoder : D.Decoder Time.Posix
posixTimeDecoder =
    -- Posix time was saved as an int...
    D.int
        |> D.andThen (\ms -> D.succeed <| Time.millisToPosix ms)


dataDecoder : D.Decoder String
dataDecoder =
    D.field "data" D.string


keyDecoder : D.Decoder TS.Key
keyDecoder =
    D.string


currentKeyDecoder : D.Decoder TS.Key
currentKeyDecoder =
    D.field "currentKey" keyDecoder


lastDataFetchTimeDecoder : D.Decoder Time.Posix
lastDataFetchTimeDecoder =
    D.field "lastDataFetchTime" posixTimeDecoder


startingDataDecoder : D.Decoder StartingData
startingDataDecoder =
    D.map2 StartingData
        dataDecoder
        lastDataFetchTimeDecoder


decodeStartingData : String -> StartingData
decodeStartingData str =
    case D.decodeString startingDataDecoder str of
        Ok startingData ->
            startingData

        Err _ ->
            StartingData "" (Time.millisToPosix 0)


encodeModel : Model -> E.Value
encodeModel model =
    E.object
        [ ( "data"
          , E.string model.data
          )
        , ( "lastDataFetchTime"
          , encodeTimePosix model.lastDataFetchTime
          )
        ]


saveData : Model -> Cmd msg
saveData model =
    let
        indentation =
            0
    in
    model
        |> encodeModel
        |> E.encode indentation
        |> Ports.storeData
