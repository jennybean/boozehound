import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Actions, Selectors } from "../../data/ingredients";

const mapStateToProps = state => ({
  ingredients: Selectors.getIngredients(state)
});

const mapDispatchToProps = {
  getIngredients: Actions.getIngredients
};

function Menu({ getIngredients, ingredients }) {
  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return (
    <Fragment>
      <h1>Filter By</h1>
      {ingredients.map(ingredient => (
        <button key={`${ingredient}_button`}>{ingredient}</button>
      ))}
    </Fragment>
  );
}

Menu.defaultProps = {
  getIngredients: () => undefined,
  ingredients: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
