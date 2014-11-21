var React = require("react/addons")

var Use = React.createClass({
  propTypes : {
    xlinkHref : React.PropTypes.string.isRequired
  },
  componentDidMount() {
    this.getDOMNode().setAttributeNS("http://www.w3.org/1999/xlink", "href", this.props.xlinkHref)
  },
  render() {
    return React.createElement("use", null)
  }
})

module.exports = Use
