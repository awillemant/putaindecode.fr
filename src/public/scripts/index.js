var React = require("react/addons")

window.React = React

var Header = require("../../components/header")

var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
})

React.render(<App />, document.getElementById("App"))
