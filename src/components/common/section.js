var React = require("react/addons")

var Title = require("./title")

var Section = React.createClass({
  propTypes : {
    title : React.PropTypes.string
  },
  render() {
    return (
      <div className="putainde-Section r-Grid">
        <div className="putainde-Section-contents r-Grid-cell r-all--8of12">
          <Title title={this.props.title}/>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Section
