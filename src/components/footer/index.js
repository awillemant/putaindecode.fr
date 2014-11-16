var React = require("react/addons")

var FooterNavigationStore = require("../../stores/footer-navigation")
var singleStoreMixinFactory = require("../../utils/mixins/SingleStoreMixin")
var Icon = require("../common/Icon")

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
      (link, index) => {
        if (!link.icon) {
          return <li key={index}><a href={link.url}>{link.name}</a></li>
        }
        else {
          return (
            <li key={index}>
              <a className="r-Tooltip r-Tooltip--top" data-r-tooltip={link.name} href={link.url}>
              <Icon name={link.icon} />
            </a></li>
          )
        }
      }
    )
    return (
      <footer className="putainde-Footer">
        <div className="r-Grid">
          <div className="r-Grid-cell r-all--1of4">
            <p className="putainde-Footer-text">
              {"© 1970 -" + (new Date().getFullYear()) + " Putain de Code !"}
            </p>
          </div>
          <div className="r-Grid-cell r-all--2of4">
            <ul className="putainde-Footer-list">
              {footerLinksList}
            </ul>
          </div>
          <div className="r-Grid-cell r-all--1of4">
            <p className="putainde-Footer-text putainde-Footer-text--small putainde-Footer-text--right">
              {"Made with " + UNICODE_HEART}
            </p>
          </div>
        </div>
      </footer>
    )
  }
})

module.exports = Footer
