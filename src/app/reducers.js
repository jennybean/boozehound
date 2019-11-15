import { combineReducers } from "redux";
import drinksReducer from "../data/drinks/reducer";
import ingredientsReducer from "../data/ingredients/reducer";
import queryReducer from "../data/query/reducer";
import recipeReducer from "../data/recipe/reducer";

export default combineReducers({
  drinks: drinksReducer,
  ingredients: ingredientsReducer,
  query: queryReducer,
  recipe: recipeReducer
});
