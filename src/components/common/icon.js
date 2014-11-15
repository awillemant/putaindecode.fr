var React = require("react/addons")
var cx = React.addons.classSet

var Use = require("../svg/use")

var Icon = React.createClass({
  propTypes : {
    name : React.PropTypes.string.isRequired
  },
  render() {
    var classes = cx(
      "putainde-Icon",
      "putainde-Icon--" + this.props.name
    )
    return (
      <svg className={classes}>
        <Use xlinkHref={this.props.name} />
      </svg>
    )
  }
})

module.exports = Icon
