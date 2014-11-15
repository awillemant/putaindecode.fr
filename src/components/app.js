var React = require("react/addons")

var App = React.createClass({
  render() {
    var content = {
      __html : (
        this.props.content +
        "<script src='bundle.js'></script>"
      )
    }
    return (
      <html lang="fr">
        <head>
          <meta charSet="utf8" />
          <title>{this.props.title}</title>
        </head>
        <body dangerouslySetInnerHTML={content}/>
      </html>
    )
  }
})

module.exports = App
