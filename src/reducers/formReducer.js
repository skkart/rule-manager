import {SET_RULE} from "../actions/types";

export default  function (state = null, action) {
  switch (action.type) {
    case SET_RULE:
      return action.payload || {};
    default:
      return null;
  }
}