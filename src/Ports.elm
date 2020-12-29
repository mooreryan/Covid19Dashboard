port module Ports exposing (sendToVegaLite, storeData)

import VegaLite


port sendToVegaLite : VegaLite.Spec -> Cmd msg


port storeData : String -> Cmd msg
