import { put, takeEvery } from "redux-saga/effects";
import * as Types from "./types";
import * as Actions from "./actions";

export function* getIngredients() {
  const data = yield fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
  ).then(response => response.json());
  yield put(Actions.getIngredientsSuccess(data.drinks));
}

export default function*() {
  yield takeEvery(Types.GET_INGREDIENTS, getIngredients);
}
