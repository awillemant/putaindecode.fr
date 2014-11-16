var assign = require("object-assign")
/**
 * @class Store
 *
 * base class for Stores, implementing the EventEmitter logic,
 * Store instances must be have a `getStore` option
 * `this._listeners` immutability must be preserved
 */
class Store {
  constructor(options) {
    if(typeof options.getStore != "function") {
      throw new TypeError("missing `getStore` method")
    }
    assign(this, options)
    this._listeners = []
  }
  addChangeListener(func) {
    if(this._listeners.indexOf(func) != -1) {
      console.warn("possible memory leak detected in ", this)
      return
    }
    if(typeof func != "function") {
      throw new TypeError(
        "`func` should be a function, instead got " + typeof func
      )
    }
    this._listeners = this._listeners.concat(func)
  }
  removeChangeListener(func) {
    this._listeners = this._listeners.filter(
      (listener) => listener !== func
    )
  }
  emitChange() {
    this._listeners.forEach(function(listener){
      listener()
    })
  }
}

module.exports = Store
