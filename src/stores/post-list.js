var Store = require("../utils/store")

var AppDispatcher = require("../dispatcher")
var ActionTypes = require("../constants").ActionTypes

var API = require("../api")

var _store = {
  pending : true,
  list : []
}

var PostListStore = new Store({
  getStore() {
    return _store
  },
  dispatchToken : AppDispatcher.register(function(payload){
    var action = payload.action
    switch(action.type) {
      case ActionTypes.GET_POST_LIST:
        API.getPostList()
        break
      case ActionTypes.RECEIVED_POST_LIST:
        _store = action.response
        PostListStore.emitChange()
        break
      default:
        break
    }
  })
})

module.exports = PostListStore
