var React = require("react/addons")

var HeaderLogo = require("./logo")

var Header = React.createClass({
  render() {
    return (
      <header style={this.state.style}>
        <HeaderLogo />
      </header>
    )
  }
})

module.exports = Header
