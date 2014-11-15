var React = require("react/addons")

var Navigation = require("./navigation")

var Header = React.createClass({
  render() {
    return (
      <div className="putainde-Header">
        <div className="r-Grid">
          <div className="r-Grid-cell r-all--5of12">
            <a className="putainde-SiteTitle" href="/">
              <img className="putainde-Logo" alt="Putain de code" src="/images/p!-logo.svg" />
            </a>
            <span>
              {"Putain de code !"}
            </span>
          </div>
          <div className="r-Grid-cell r-all--7of12">
            <Navigation list={[]}/>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Header
