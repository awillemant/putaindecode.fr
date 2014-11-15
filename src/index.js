var fs = require("fs")
var React = require("react/addons")

var App = require("./components/app")

fs.writeFileSync(
  "./dist/index.html",
  React.renderToStaticMarkup(
    <App />
  ),
  "utf8"
)
