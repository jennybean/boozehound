import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Actions as DrinksActions } from "../../data/drinks";
import {
  Actions as IngredientsActions,
  Selectors as IngredientsSelectors
} from "../../data/ingredients";

const mapStateToProps = state => ({
  ingredients: IngredientsSelectors.getIngredients(state)
});

const mapDispatchToProps = {
  getDrinks: DrinksActions.getDrinks,
  getIngredients: IngredientsActions.getIngredients
};

function Menu({ getDrinks, getIngredients, ingredients }) {
  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return (
    <Fragment>
      <h1>Filter By</h1>
      {ingredients.map(ingredient => (
        <button
          key={`${ingredient}_button`}
          onClick={() => getDrinks(ingredient)}
        >
          {ingredient}
        </button>
      ))}
    </Fragment>
  );
}

Menu.defaultProps = {
  getDrinks: () => undefined,
  getIngredients: () => undefined,
  ingredients: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
