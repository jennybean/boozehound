import { combineReducers } from "redux";
import ingredientsReducer from "../data/ingredients/reducer";
import drinksReducer from "../data/drinks/reducer";

export default combineReducers({
  drinks: drinksReducer,
  ingredients: ingredientsReducer
});
