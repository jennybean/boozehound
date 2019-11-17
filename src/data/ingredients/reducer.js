import { handleActions } from "redux-actions";
import { loadingReducer, successReducer } from "../../helpers/data/helpers";
import * as Types from "./types";

const initialState = {
  data: [],
  isLoading: false
};

export default handleActions(
  {
    [Types.GET_INGREDIENTS]: loadingReducer,
    [Types.GET_INGREDIENTS_SUCCESS]: successReducer
  },
  initialState
);
