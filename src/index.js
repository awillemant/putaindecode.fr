var fs = require("fs")
var React = require("react/addons")

var App = require("./components/app")
var Header = require("./components/header")

fs.writeFileSync(
  "./dist/index.html",
  React.renderToStaticMarkup(
    <App />
  ),
  "utf8"
)
