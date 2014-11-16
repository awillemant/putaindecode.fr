var React = require("react/addons")

window.React = React

var Header = require("../../components/header")
var PostList = require("../../components/post-list")
var Footer = require("../../components/footer")
var Section = require("../../components/common/section")

var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Section title="Les derniers articles">
          <PostList />
        </Section>
        <Footer />
      </div>
    )
  }
})

React.render(<App />, document.getElementById("App"))
