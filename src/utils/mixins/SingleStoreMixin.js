function singleStoreMixinFactory(store){
  var SingleStoreMixin = {
    getInitialState() {
      return store.getStore()
    },
    componentDidMount() {
      store.addChangeListener(this._onStoreChange)
    },
    componentWillUnmount() {
      store.removeChangeListener(this._onStoreChange)
    },
    _onStoreChange() {
      this.setState(store.getStore())
    }
  }
  return SingleStoreMixin
}

module.exports = singleStoreMixinFactory
