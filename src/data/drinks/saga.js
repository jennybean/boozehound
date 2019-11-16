import { put, takeEvery } from "redux-saga/effects";
import * as Types from "./types";
import * as Actions from "./actions";
import * as RecipeActions from "../recipe/actions";

export function* getDrinks(action) {
  const data = yield fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${action.payload}`
  ).then(response => response.json());
  yield put(Actions.getDrinksSuccess(data.drinks));

  // Reset and fetch new recipe
  yield put(RecipeActions.getRecipeSuccess({}));
  yield put(RecipeActions.getRecipe(data.drinks[0].idDrink));
}

export default function*() {
  yield takeEvery(Types.GET_DRINKS, getDrinks);
}
