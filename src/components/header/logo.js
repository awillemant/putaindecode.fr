var React = require("react/addons")

var RenderOnceMixin = require("../../utils/mixins").RenderOnceMixin

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
      <a className="putainde-SiteTitle" href="/">
        <img alt={this.props.title} src="/assets/images/p!-logo.svg" />
        <span>{this.props.title}</span>
      </a>
    )
  }
})
