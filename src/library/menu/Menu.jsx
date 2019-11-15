import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Actions as QueryActions } from "../../data/query";
import {
  Actions as IngredientsActions,
  Selectors as IngredientsSelectors
} from "../../data/ingredients";

const mapStateToProps = state => ({
  ingredients: IngredientsSelectors.getIngredients(state)
});

const mapDispatchToProps = {
  getIngredients: IngredientsActions.getIngredients,
  setQuery: QueryActions.setQuery
};

const Container = styled.div`
  max-width: 20%;
  min-width: 150px;
  width: 20%;
`;

const IngredientList = styled.div`
  height: 90%;
  overflow-y: auto;
`;

const Ingredient = styled.button`
  display: block;
  background: transparent;
  border: none;
  :focus {
    outline: none;
    text-decoration: underline;
  }
`;

function Menu({ getIngredients, ingredients, setQuery }) {
  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return (
    <Container>
      <h1>Filter by</h1>
      <IngredientList>
        {ingredients.map(ingredient => (
          <Ingredient
            key={`${ingredient}_button`}
            onClick={() => setQuery(ingredient)}
          >
            {ingredient}
          </Ingredient>
        ))}
      </IngredientList>
    </Container>
  );
}

Menu.defaultProps = {
  getIngredients: () => undefined,
  ingredients: [],
  setQuery: () => undefined
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
