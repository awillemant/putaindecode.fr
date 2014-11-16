var React = require("react/addons")
var cx = React.addons.classSet

var Tag = require("./item")

var Tags = React.createClass({
  getDefaultProps() {
    return {
      list : []
    }
  },
  propTypes : {
    list : React.PropTypes.arrayOf(React.PropTypes.string)
  },
  render() {
    return (
      <ul className="putainde-Tags">
        {this.props.list.map(
          (item, index) => <Tag name={item} key={index} />
        )}
      </ul>
    )
  }
})

module.exports = Tags
