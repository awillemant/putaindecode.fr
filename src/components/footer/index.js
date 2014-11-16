var React = require("react/addons")

var RenderOnceMixin = require("../../utils/mixins").RenderOnceMixin

var UNICODE_HEART = "\u2764"

// TODO: move these variables to a separate file and set them through props
var footerLinks = [
  {
    name : "Flux RSS",
    url : "feed.xml"
  }, {
    name : "Projets",
    url : "projets"
  }, {
    name : "Forum",
    url : "https://github.com/putaindecode/forum/issues"
  }, {
    name : "IRC",
    url : "irc://irc.freenode.net/putaindecode"
  },
  {
    name: "twitter",
    url: "https://twitter.com/putaindecode/",
    tooltip : true
  }, {
    name: "GitHub",
    url: "https://github.com/putaindecode/",
    tooltip : true
  }
]

var Footer = React.createClass({
  mixins : [
    RenderOnceMixin
  ],
  propTypes : {
    title : React.PropTypes.string
  },
  render() {
    var footerLinksList = footerLinks.map(
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
