import { all, fork } from "redux-saga/effects";
import drinksSaga from "../data/drinks/saga";
import ingredientsSaga from "../data/ingredients/saga";

export default function*() {
  yield all([fork(drinksSaga), fork(ingredientsSaga)]);
}
