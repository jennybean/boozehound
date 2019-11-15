import { all, fork } from "redux-saga/effects";
import drinksSaga from "../data/drinks/saga";
import ingredientsSaga from "../data/ingredients/saga";
import querySaga from "../data/query/saga";

export default function*() {
  yield all([fork(drinksSaga), fork(ingredientsSaga), fork(querySaga)]);
}
