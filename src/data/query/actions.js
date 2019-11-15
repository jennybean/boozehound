import { createAction } from "redux-actions";
import * as Types from "./types";

export const setQuery = createAction(Types.SET_QUERY);
export const setQuerySuccess = createAction(Types.SET_QUERY_SUCCESS);
