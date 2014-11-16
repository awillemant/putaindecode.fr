var assign = require("object-assign")
var Dispatcher = require("flux").Dispatcher

var AppDispatcher = assign(Dispatcher.prototype, {
  handleServerAction(action) {
    if(action.type == null) {
      console.error("action" , action, " has an undefined type")
    }
    this.dispatch({
      source : "SERVER",
      action : action
    })
  },
  handleViewAction(action) {
    if(action.type == null) {
      console.error("action" , action, " has an undefined type")
    }
    this.dispatch({
      source : "VIEW",
      action : action
    })
  }
})

Dispatcher.call(AppDispatcher)

module.exports = AppDispatcher
