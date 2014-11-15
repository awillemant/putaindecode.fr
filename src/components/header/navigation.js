var React = require("react/addons")

var NavigationItem = require("./navigationItem")

var Navigation = React.createClass({
  propTypes : {
    list : React.PropTypes.array.isRequired,
    currentPage : React.PropTypes.string
  },
  render() {
    return (
      <nav className="putainde-Nav">
        {this.props.list.map((item) => <NavigationItem item={item} />)}
      </nav>
    )
  }
})

module.exports = Navigation
