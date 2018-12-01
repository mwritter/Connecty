import { SET_ERRORS } from "../actions/types";

const intialState = {};

export default function(state = intialState, actions) {
  switch (actions.type) {
    case SET_ERRORS:
      return actions.payload;
    default:
      return state;
  }
}
