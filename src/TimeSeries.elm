module TimeSeries exposing
    ( County
    , Data
    , DataRecord
    , Date
    , Key
    , State
    , VegaLiteData
    , defaultDataRecord
    , mkKey
    , mkVegaLiteData
    , parse
    )

import Count exposing (Count, default)
import Csv exposing (Csv)
import Dict exposing (Dict)
import List.Extra as LE
import PopulationData as PD
import Set exposing (Set)


{-| It will have at least 11 entries headers should be:

(0) UID, (1) iso2,(2) iso3, (3) code3, (4) FIPS, (5) Admin2, (6)
Province\_State, (7) Country\_Region, (8) Lat, (9) Long\_, (10) Combined\_Key,
(11) 1/22/20, (12) 1/23/20,..., (N) [current date]

Here is a record example: (0) 84001001, (1) US, (2) USA, (3) 840, (4) 1001.0,
(5) Autauga, (6) Alabama, (7) US, (8) 32.53952745,(9) -86.64408227, (10)
"Autauga, Alabama, US", (11) 0, (12) 0, (13) 0, ..., (N)
current-date-case-count.

-}



-- Types


type alias Data =
    { stateCounties : Dict State (List County)
    , dataRecords : Dict Key DataRecord
    }


type alias DataRecord =
    { key : Key
    , county : State
    , state : County
    , dates : List Date
    , confirmedCases : List Count
    , population : Maybe Count
    }


type alias VegaLiteData =
    { dates : List Date
    , confirmedCases : List Float
    , keys : List Key
    }


mkVegaLiteData : Bool -> List DataRecord -> VegaLiteData
mkVegaLiteData weightCounts dataRecords =
    List.foldl
        (accumulateDataRecord weightCounts)
        emptyVegaLiteData
        dataRecords


emptyVegaLiteData : VegaLiteData
emptyVegaLiteData =
    VegaLiteData [] [] []


{-| TODO switch this to return Float...but then all the rest of the "Counts"
will need to change as well.
-}
weightCount : Count -> Count -> Float
weightCount population count =
    Count.toFloat count / Count.toFloat population * 100000


accumulateDataRecord : Bool -> DataRecord -> VegaLiteData -> VegaLiteData
accumulateDataRecord weightCounts dataRecord vegaLiteData =
    let
        newDates =
            vegaLiteData.dates ++ dataRecord.dates

        confirmedCases =
            if weightCounts then
                case dataRecord.population of
                    Just population ->
                        List.map
                            (weightCount population)
                            dataRecord.confirmedCases

                    Nothing ->
                        List.map Count.toFloat dataRecord.confirmedCases

            else
                List.map Count.toFloat dataRecord.confirmedCases

        newConfirmedCases =
            vegaLiteData.confirmedCases ++ confirmedCases

        -- todo ensure that lengths of above two things match!
        ks =
            List.repeat (List.length dataRecord.dates) dataRecord.key

        newKeys =
            vegaLiteData.keys ++ ks
    in
    { vegaLiteData
        | dates = newDates
        , confirmedCases = newConfirmedCases
        , keys = newKeys
    }


defaultDataRecord : DataRecord
defaultDataRecord =
    { key = defaultKey
    , county = defaultCounty
    , state = defaultState
    , dates = [ defaultDate ]
    , confirmedCases = [ Count.default ]
    , population = Nothing
    }


type alias Date =
    String


defaultDate : Date
defaultDate =
    ""


type alias Key =
    String


defaultKey : Key
defaultKey =
    ""


mkKey : State -> County -> Key
mkKey state county =
    state ++ ", " ++ county


type alias State =
    String


defaultState : State
defaultState =
    "NA"


type alias County =
    String


defaultCounty : County
defaultCounty =
    "NA"



-- Indices in the data


firstConfirmedCountIndex : Int
firstConfirmedCountIndex =
    11


firstDateIndex : Int
firstDateIndex =
    firstConfirmedCountIndex


countyIndex : Int
countyIndex =
    5


stateIndex : Int
stateIndex =
    6


countryIndex : Int
countryIndex =
    7



-- Parsing data


parseConfirmedCounts : List String -> List Count
parseConfirmedCounts data =
    data
        |> List.drop firstConfirmedCountIndex
        |> List.map Count.fromStringWithDefault


parseDateNames : List String -> List String
parseDateNames headers =
    -- The headers have a bunch of extra info at the beginning that we
    -- are ignoring.
    List.drop firstDateIndex headers


parseRecord : List String -> List String -> ( Key, DataRecord )
parseRecord dates data =
    let
        county =
            getAtWithDefault defaultCounty countyIndex data

        state =
            getAtWithDefault defaultState stateIndex data

        key =
            mkKey state county

        population : Maybe Count
        population =
            case Dict.get key PD.populationData of
                Just pop ->
                    Just <| Count.fromIntWithDefault pop

                Nothing ->
                    Nothing
    in
    ( key
    , { key = key
      , county = county
      , state = state
      , dates = dates
      , confirmedCases = parseConfirmedCounts data
      , population = population
      }
    )


parseCsvData : Csv -> Dict Key DataRecord
parseCsvData csv =
    let
        dates : List String
        dates =
            List.drop firstDateIndex csv.headers

        dataRecords : List ( Key, DataRecord )
        dataRecords =
            List.map (parseRecord dates) csv.records
    in
    Dict.fromList dataRecords


parseDataRecordList : Dict Key DataRecord -> Data
parseDataRecordList dataRecords =
    let
        records =
            Dict.values dataRecords

        stateCounties : List ( String, String )
        stateCounties =
            LE.zip
                (List.map .state records)
                (List.map .county records)
    in
    { stateCounties = buildStateCountiesDict stateCounties
    , dataRecords = dataRecords
    }


parse : String -> Data
parse timeSeriesData =
    timeSeriesData
        |> Csv.parse
        |> parseCsvData
        |> parseDataRecordList



-- Utils


buildStateCountiesDict : List ( State, County ) -> Dict State (List County)
buildStateCountiesDict stateCountyPairs =
    let
        buildDict : ( State, County ) -> Dict State (Set County) -> Dict State (Set County)
        buildDict ( state, county ) stateToCounties =
            Dict.update state (createOrInsert county) stateToCounties
    in
    List.foldl buildDict Dict.empty stateCountyPairs
        |> Dict.map (\_ counties -> Set.toList counties)


createOrInsert : String -> Maybe (Set String) -> Maybe (Set String)
createOrInsert newItem maybeItems =
    case maybeItems of
        -- items was a value in the dict
        Just items ->
            Just (Set.insert newItem items)

        -- The key wasn't present so there were no items.
        Nothing ->
            Just (Set.singleton newItem)


{-| If item is empty or the index is out of bounds, return the default value.
-}
getAtWithDefault : String -> Int -> List String -> String
getAtWithDefault default index data =
    case LE.getAt index data of
        Just item ->
            if item == "" then
                default

            else
                item

        Nothing ->
            default
