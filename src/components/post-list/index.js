var React = require("react/addons")
var cx = React.addons.classSet
var singleStoreMixinFactory = require("../../utils/mixins/SingleStoreMixin")

var PostListStore = require("../../stores/post-list")
var PostListActions = require("../../actions/PostListActions")

var PostList = React.createClass({
  mixins : [
    singleStoreMixinFactory(PostListStore)
  ],
  componentDidMount() {
    PostListActions.getPostList()
  },
  render() {
    return (
      <ul>
        {this.state.list.map(function(item, index){
          return <li key={index}>{item.meta.Title}</li>
        })}
      </ul>
    )
  }
})

module.exports = PostList
