var React = require("react/addons")
var cx = React.addons.classSet

var Tag = React.createClass({
  propTypes : {
    name : React.PropTypes.string.isRequired
  },
  render() {
    return (
      <li className="putainde-Tag">{this.props.name}</li>
    )
  }
})

module.exports = Tag
