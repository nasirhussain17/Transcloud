import { GET_NAMES, POST_NAME } from "./types";

export const addName = (name) => async (dispatch) =>
  dispatch({
    type: POST_NAME,
    payload: name,
  });

export const getNames = () => async (dispatch) => {
  dispatch({
    type: GET_NAMES,
  });
};
