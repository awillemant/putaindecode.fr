var AppDispatcher = require("../dispatcher")
var ActionTypes = require("../constants").ActionTypes

var PostListActions = {
  getPostList(xhr) {
    AppDispatcher.handleViewAction({
      type : ActionTypes.GET_POST_LIST
    })
  },
  receivePostList(xhr) {
    AppDispatcher.handleServerAction({
      type : ActionTypes.RECEIVED_POST_LIST,
      response : JSON.parse(xhr.responseText)
    })
  },
  dontReceivePostList(xhr) {
    AppDispatcher.handleServerAction({
      type : ActionTypes.DIDNT_RECEIVE_POST_LIST,
      status : xhr.status
    })
  }
}

module.exports = PostListActions
