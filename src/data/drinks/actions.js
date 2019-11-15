import { createAction } from "redux-actions";
import * as Types from "./types";

export const getDrinks = createAction(Types.GET_DRINKS);
export const getDrinksSuccess = createAction(Types.GET_DRINKS_SUCCESS);
