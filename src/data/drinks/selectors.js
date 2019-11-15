export const getDrinks = state =>
  state.drinks.data.map(({ idDrink, strDrink, strDrinkThumb }) => ({
    id: idDrink,
    name: strDrink,
    thumbnail: strDrinkThumb
  }));

export const isLoading = state => state.drinks.isLoading;
