import { handleActions } from "redux-actions";
import * as Types from "./types";

const initialState = {
  data: {},
  isLoading: false
};

const loadingReducer = state => ({
  ...state,
  isLoading: true
});

const successReducer = (state, action) => ({
  data: action.payload,
  isLoading: false
});

export default handleActions(
  {
    [Types.GET_RECIPE]: loadingReducer,
    [Types.GET_RECIPE_SUCCESS]: successReducer
  },
  initialState
);
