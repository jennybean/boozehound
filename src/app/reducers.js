import { combineReducers } from "redux";
import drinksReducer from "../data/drinks/reducer";
import ingredientsReducer from "../data/ingredients/reducer";
import queryReducer from "../data/query/reducer";

export default combineReducers({
  drinks: drinksReducer,
  ingredients: ingredientsReducer,
  query: queryReducer
});
