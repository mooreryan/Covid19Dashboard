module Utils exposing (..)

import Time


type alias Millis =
    Int


dataFetchRateLimit : Millis
dataFetchRateLimit =
    60 * 60 * 1000


defaultOptionText : String
defaultOptionText =
    "-"


getElapsedTime : Time.Posix -> Time.Posix -> Time.Posix
getElapsedTime oldTime newTime =
    Time.millisToPosix (Time.posixToMillis newTime - Time.posixToMillis oldTime)


timeSeriesDataUrl : String
timeSeriesDataUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv"


timeSeriesDataGitHubUrl : String
timeSeriesDataGitHubUrl =
    "https://github.com/CSSEGISandData/COVID-19"


popDataSourceUrl : String
popDataSourceUrl =
    "https://www.ers.usda.gov/data-products/atlas-of-rural-and-small-town-america/download-the-data/"
