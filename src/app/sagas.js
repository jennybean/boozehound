import { all, fork } from "redux-saga/effects";
import ingredientsSaga from "../data/ingredients/saga";

export default function*() {
  yield all([fork(ingredientsSaga)]);
}
