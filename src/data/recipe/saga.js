import { put, takeEvery } from "redux-saga/effects";
import * as Types from "./types";
import * as Actions from "./actions";

export function* getRecipe(action) {
  const data = yield fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${action.payload}`
  ).then(response => response.json());
  yield put(Actions.getRecipeSuccess(data.drinks[0]));
}

export default function*() {
  yield takeEvery(Types.GET_RECIPE, getRecipe);
}
