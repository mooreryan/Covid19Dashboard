module Count exposing
    ( Count
    , default
    , fromInt
    , fromIntWithDefault
    , fromString
    , fromStringWithDefault
    , toFloat
    , toInt
    , toString
    )


type Count
    = Count Int


default : Count
default =
    Count 0


fromInt : Int -> Maybe Count
fromInt n =
    if n < 0 then
        Nothing

    else
        Just (Count n)


fromIntWithDefault : Int -> Count
fromIntWithDefault n =
    if n < 0 then
        default

    else
        Count n


toInt : Count -> Int
toInt (Count c) =
    c


toFloat : Count -> Float
toFloat (Count c) =
    Basics.toFloat c


fromString : String -> Maybe Count
fromString s =
    case String.toInt s of
        Just i ->
            fromInt i

        Nothing ->
            Nothing


fromStringWithDefault : String -> Count
fromStringWithDefault s =
    case String.toInt s of
        Just i ->
            fromIntWithDefault i

        Nothing ->
            default


toString : Count -> String
toString (Count c) =
    String.fromInt c



-- Results of conversions should return Result if they can fail
-- Rust has From (should never fail) and TryFrom (can fail)
-- Elm String.toInt https://package.elm-lang.org/packages/elm/core/latest/String#toInt
