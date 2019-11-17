import { handleActions } from "redux-actions";
import { loadingReducer, successReducer } from "../../helpers/data/helpers";
import * as Types from "./types";

const initialState = {
  data: {},
  isLoading: false
};

export default handleActions(
  {
    [Types.GET_RECIPE]: loadingReducer,
    [Types.GET_RECIPE_SUCCESS]: successReducer
  },
  initialState
);
