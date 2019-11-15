import { put, takeEvery } from "redux-saga/effects";
import * as Types from "./types";
import * as Actions from "./actions";
import * as DrinksActions from "../drinks/actions";

export function* setQuery(action) {
  yield put(DrinksActions.getDrinks(action.payload));
  yield put(Actions.setQuerySuccess(action.payload));
}

export default function*() {
  yield takeEvery(Types.SET_QUERY, setQuery);
}
