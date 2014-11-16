var React = require("react/addons")

var NavigationItem = require("./navigationItem")
var NavigationStore = require("../../stores/navigation")
var singleStoreMixinFactory = require("../../utils/mixins/SingleStoreMixin")

var Navigation = React.createClass({
  mixins : [
    singleStoreMixinFactory(NavigationStore)
  ],
  propTypes : {
    currentPage : React.PropTypes.string
  },
  render() {
    return (
      <nav className="putainde-Nav">
        {this.state.list.map(
          (item, index) => <NavigationItem item={item} key={index} />
        )}
      </nav>
    )
  }
})

module.exports = Navigation
