import { createAction } from "redux-actions";
import * as Types from "./types";

export const getRecipe = createAction(Types.GET_RECIPE);
export const getRecipeSuccess = createAction(Types.GET_RECIPE_SUCCESS);
