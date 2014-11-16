var React = require("react/addons")

var XLINK_HREF_ATTRIBUTE = "xlink:href"

var Use = React.createClass({
  propTypes : {
    xlinkHref : React.PropTypes.string.isRequired
  },
  componentDidMount() {
    this.getDOMNode().setAttribute(XLINK_HREF_ATTRIBUTE, this.props.xlinkHref)
  },
  render() {
    return React.createElement("use", null)
  }
})

module.exports = Use
