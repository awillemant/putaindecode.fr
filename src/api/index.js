var Request = require("bloody-request")

var PostActions = require("../actions/PostActions")

var API = {
  getPost(slug) {
    Request("/api/posts/" + slug + ".json")
      .then(
        PostActions.receivePost,
        PostActions.dontReceivePost
      )
  }
}

module.exports = API
