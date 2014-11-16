var Store = require("../utils/store")

var _store = {
  list : [
    {
      name : "Flux RSS",
      url : "feed.xml"
    },
    {
      name : "Projets",
      url : "projets"
    },
    {
      name : "Forum",
      url : "https://github.com/putaindecode/forum/issues"
    },
    {
      name : "IRC",
      url : "irc://irc.freenode.net/putaindecode"
    },
    {
      name: "twitter",
      url: "https://twitter.com/putaindecode/",
      icon : "github"
    },
    {
      name: "GitHub",
      url: "https://github.com/putaindecode/",
      icon : "github"
    }
  ]
}

var FooterNavigationStore = new Store({
  getStore() {
    return _store
  }
})

module.exports = FooterNavigationStore
