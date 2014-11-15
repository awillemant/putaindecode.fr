var React = require("react/addons")

var Foo = React.createClass({
  getInitialState() {
    return {
      i : 1
    }
  },
  handleClick() {
    var i = this.state.i + 1
    this.setState({ i })
  },
  render() {
    return (
      <div
        style={{fontSize:"3em", color:"blue"}}
        onClick={this.handleClick}>
        {this.state.i}
      </div>
    )
  }
})

React.render(<Foo />, document.getElementById("App"))
