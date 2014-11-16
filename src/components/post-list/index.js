var React = require("react/addons")
var cx = React.addons.classSet
var singleStoreMixinFactory = require("../../utils/mixins/SingleStoreMixin")

var PostListStore = require("../../stores/post-list")
var PostListActions = require("../../actions/PostListActions")

var PostListItem = require("./item")

var PostList = React.createClass({
  mixins : [
    singleStoreMixinFactory(PostListStore)
  ],
  componentDidMount() {
    PostListActions.getPostList()
  },
  render() {
    return (
      <div className="putainde-List">
        {this.state.list.map(
          (item, index) => <PostListItem item={item} key={index}/>
        )}
      </div>
    )
  }
})

module.exports = PostList
