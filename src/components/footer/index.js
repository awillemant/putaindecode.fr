var React = require("react/addons")

var FooterNavigationStore = require("../../stores/footer-navigation")
var singleStoreMixinFactory = require("../../utils/mixins/SingleStoreMixin")

var UNICODE_HEART = "\u2764"

var Footer = React.createClass({
  mixins : [
    singleStoreMixinFactory(FooterNavigationStore)
  ],
  propTypes : {
    title : React.PropTypes.string
  },
  render() {
    var footerLinksList = this.state.list.map(
      (link, index) => <li key={index}><a href={link.url}>{link.name}</a></li>
    )
    return (
      <footer className="putainde-Footer">
        <div className="r-Grid">
          <div className="r-Grid-cell r-all--1of4">
            {"© 1970 -" + (new Date().getFullYear()) + " Putain de Code !"}
          </div>
          <div className="r-Grid-cell r-all--2of4">
            <ul className="putainde-Footer-list">
              {footerLinksList}
            </ul>
          </div>
          <div className="r-Grid-cell r-all--1of4">
            {"Made with " + UNICODE_HEART}
          </div>
        </div>
      </footer>
    )
  }
})

module.exports = Footer
