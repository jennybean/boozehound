import { handleActions } from "redux-actions";
import { loadingReducer, successReducer } from "../../helpers/data/helpers";
import * as Types from "./types";

const initialState = {
  data: [],
  isLoading: false
};

export default handleActions(
  {
    [Types.GET_DRINKS]: loadingReducer,
    [Types.GET_DRINKS_SUCCESS]: successReducer
  },
  initialState
);
