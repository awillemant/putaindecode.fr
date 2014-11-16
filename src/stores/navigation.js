var Store = require("../utils/store")

var _store = {
  list : [
    {
      title : "Articles",
      url : "/posts",
      icon : "bookmarks"
    },
    {
      title : "README",
      url : "/c-est-quoi-putaindecode",
      icon : "text-file"
    },
    {
      title : "Participer",
      url : "/comment-contribuer",
      icon : "text-pencil"
    }
  ]
}

var NavigationStore = new Store({
  getStore() {
    return _store
  }
})

module.exports = NavigationStore
