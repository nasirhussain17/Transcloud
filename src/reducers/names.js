import { GET_NAMES, POST_NAME } from "../actions/types";

const initialState = {
  names: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NAMES:
      return {
        ...state,
        names: state.names,
      };
    case POST_NAME:
      return {
        ...state,
        names: state.names.concat(payload),
      };
    default:
      return state;
  }
}
