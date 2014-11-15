var React = require("react/addons")

var RenderOnceMixin = require("../../utils/mixins").RenderOnceMixin

var UNICODE_HEART = "\u2764"

var HeaderLogo = React.createClass({
  mixins : [
    RenderOnceMixin
  ],
  getDefaultProps() {
    return {
      title : "Putain de Code !"
    }
  },
  propTypes : {
    title : React.PropTypes.string
  },
  render() {
    return (
      <footer className="putainde-Footer">
        <div className="r-Grid">
          <div className="r-Grid-cell r-all--1of4">
            {"© 1970 -" + new Date().toFullYear() + " Putain de Code !"}
          </div>
          <div className="r-Grid-cell r-all--2of4">

          </div>
          <div className="r-Grid-cell r-all--1of4">
            {"Made with " + UNICODE_HEART}
          </div>
        </div>
      </footer>
    )
  }
})
