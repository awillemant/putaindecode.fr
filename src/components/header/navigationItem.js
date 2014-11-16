var React = require("react/addons")
var cx = React.addons.classSet

var Icon = require("../common/icon")

var NavigationItem = React.createClass({
  propTypes : {
    item : React.PropTypes.shape({
      title : React.PropTypes.string,
      url : React.PropTypes.string,
      icon : React.PropTypes.string
    }),
    currentPage : React.PropTypes.string
  },
  render() {
    var hasTitle = this.props.item.hasOwnProperty("title")
    var classes = cx({
      "putainde-Nav-item" : true,
      "putainde-Nav-item--current" : this.props.item.url == this.props.currentPage,
      "putainde-Nav-item--icon" : hasTitle,
      "r-Tooltip" : hasTitle,
      "r-Tooltip--bottom" : hasTitle
    })
    return (
      <a className="putainde-Nav-item" href={this.props.item.url}>
        {this.props.icon ? <Icon name={this.props.icon} /> : null}
        {this.props.item.title || ""}
      </a>
    )
  }
})

module.exports = NavigationItem
