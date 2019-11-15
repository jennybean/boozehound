import { handleActions } from "redux-actions";
import * as Types from "./types";

const initialState = "";

const successReducer = (state, action) => action.payload;

export default handleActions(
  {
    [Types.SET_QUERY_SUCCESS]: successReducer
  },
  initialState
);
