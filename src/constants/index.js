var keyMirror = require("bloody-keymirror")

module.exports = {
  ActionTypes : keyMirror({
    GET_POST_LIST : null,
    RECEIVED_POST_LIST : null,
    DIDNT_RECEIVE_POST_LIST : null,
    GET_POST : null,
    RECEIVED_POST : null,
    DIDNT_RECEIVE_POST : null,
    GET_AUTHOR : null,
    RECEIVED_AUTHOR : null,
    DIDNT_RECEIVE_AUTHOR : null
  })
}
