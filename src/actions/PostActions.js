var AppDispatcher = require("../dispatcher")
var ActionTypes = require("../constants").ActionTypes

var PostActions = {
  receivePost(xhr) {
    AppDispatcher.handleServerAction({
      type : ActionTypes.RECEIVED_POST,
      response : JSON.parse(xhr.responseText)
    })
  },
  dontReceivePost(xhr) {
    AppDispatcher.handleServerAction({
      type : ActionTypes.DIDNT_RECEIVED_POST,
      status : xhr.status
    })
  }
}

module.exports = PostActions
