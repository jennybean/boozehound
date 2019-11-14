export const getIngredients = state =>
  state.ingredients.data.map(({ strIngredient1 }) => strIngredient1);
