var Request = require("bloody-request")

var PostActions = require("../actions/PostActions")
var PostListActions = require("../actions/PostListActions")

var API = {
  getPost(slug) {
    Request.get("/api/posts/" + slug + ".json")
      .then(
        PostActions.receivePost,
        PostActions.dontReceivePost
      )
  },
  getPostList() {
    Request.get("/api/posts-list/index.json")
      .then(
        PostListActions.receivePostList,
        PostListActions.dontReceivePostList
      )
  }
}

module.exports = API
