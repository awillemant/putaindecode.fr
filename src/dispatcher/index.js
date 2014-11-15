var assign = require("object-assign")
var Dispatcher = require("flux").Dispatcher

var AppDispatcher = assign(Dispatcher.prototype, {
  handleServerAction(action) {
    this.dispatch({
      source : "SERVER",
      action : action
    })
  },
  handleViewAction(action) {
    this.dispatch({
      source : "VIEW",
      action : action
    })
  }
})

Dispatcher.call(AppDispatcher)

module.exports = AppDispatcher
