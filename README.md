# COVID-19 Dashboard

Elm sourch code for the [COVID-19 Dashboard](https://www.tenderisthebyte.com/apps/Covid19Dashboard) on my blog.

- COVID-19 data from [JHU CSSE](https://github.com/CSSEGISandData/COVID-19).
- Population data from [USDA ERS](https://www.ers.usda.gov/data-products/atlas-of-rural-and-small-town-america/download-the-data/).


## Make it

```
$ sh ./scripts/elm-optimize.sh src/Main.elm CovidDashboard
```

Then move `CovidDashboard.min.js` into `<source>/assets/js/CovidDashboard.min.js` in the [blog source project](https://github.com/mooreryan/TenderIsTheByte/tree/master/assets/js).