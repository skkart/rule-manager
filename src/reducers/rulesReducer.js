import {FETCH_RULES} from "../actions/types";

export default  function (state = null, action) {
  switch (action.type) {
    case FETCH_RULES:
      return action.payload || [];
    default:
      return state;
  }
}