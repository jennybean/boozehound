import { createAction } from "redux-actions";
import * as Types from "./types";

export const getIngredients = createAction(Types.GET_INGREDIENTS);
export const getIngredientsSuccess = createAction(
  Types.GET_INGREDIENTS_SUCCESS
);
