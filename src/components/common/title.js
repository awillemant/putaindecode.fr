var React = require("react/addons")
var cx = React.addons.classSet

var Title = React.createClass({
  propTypes : {
    title : React.PropTypes.string,
    modifier : React.PropTypes.string
  },
  render() {
    if(this.props.title == null) {
      return null
    }
    var classes = cx({
      "putainde-Title" : true,
      ["putainde-Title--" + this.props.modifier] : this.props.hasOwnProperty("modifier")
    })
    return (
      <div className={classes}>
        <h2 className="putainde-Title-text">{this.props.title}</h2>
      </div>
    )
  }
})

module.exports = Title
