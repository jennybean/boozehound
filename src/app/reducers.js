import { combineReducers } from "redux";
import ingredientsReducer from "../data/ingredients/reducer";

export default combineReducers({
  ingredients: ingredientsReducer
});
