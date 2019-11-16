import { put, select, takeEvery } from "redux-saga/effects";
import * as Types from "./types";
import * as Actions from "./actions";
import * as Selectors from "./selectors";
import * as QueryActions from "../query/actions";

export function* getIngredients() {
  const data = yield fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
  ).then(response => response.json());
  yield put(Actions.getIngredientsSuccess(data.drinks));

  const ingredients = yield select(Selectors.getIngredients);
  const randomIngredient =
    ingredients[Math.floor(Math.random() * ingredients.length)];
  yield put(QueryActions.setQuery(randomIngredient));
}

export default function*() {
  yield takeEvery(Types.GET_INGREDIENTS, getIngredients);
}
