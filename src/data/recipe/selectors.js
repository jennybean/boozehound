const getIngredientsList = recipe => {
  const ingredientsKey = Object.keys(recipe).filter(i =>
    i.startsWith("strIngredient")
  );
  const measurementsKey = Object.keys(recipe).filter(i =>
    i.startsWith("strMeasure")
  );

  return ingredientsKey
    .map((key, index) => ({
      measurement: recipe[measurementsKey[index]],
      name: recipe[key]
    }))
    .filter(({ name }) => name);
};

export const getRecipe = state => ({
  glass: state.recipe.data.strGlass,
  id: state.recipe.data.idDrink,
  ingredients: getIngredientsList(state.recipe.data),
  instructions: state.recipe.data.strInstructions,
  name: state.recipe.data.strDrink,
  thumbnail: state.recipe.data.strDrinkThumb
});

export const isLoading = state => state.recipe.isLoading;
