import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  Actions as QueryActions,
  Selectors as QuerySelectors
} from "../../data/query";
import {
  Actions as IngredientsActions,
  Selectors as IngredientsSelectors
} from "../../data/ingredients";

const mapStateToProps = state => ({
  ingredients: IngredientsSelectors.getIngredients(state),
  query: QuerySelectors.getQuery(state)
});

const mapDispatchToProps = {
  getIngredients: IngredientsActions.getIngredients,
  setQuery: QueryActions.setQuery
};

const Container = styled.div`
  height: 100%;
`;

const Header = styled.h2`
  white-space: nowrap;
`;

const IngredientList = styled.div`
  height: 90%;
  overflow-y: auto;
`;

const Ingredient = styled.button`
  background: transparent;
  border: none;
  display: block;
  font-size: 18px;
  text-align: left;
  :focus {
    outline: none;
  }
`;

function Filter({ getIngredients, ingredients, query, setQuery }) {
  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return (
    <Container>
      <Header>Filter by</Header>
      <IngredientList>
        {ingredients.map(ingredient => (
          <Ingredient
            key={`${ingredient}_button`}
            onClick={() => setQuery(ingredient)}
            style={query === ingredient ? { textDecoration: "underline" } : {}}
          >
            {ingredient}
          </Ingredient>
        ))}
      </IngredientList>
    </Container>
  );
}

Filter.defaultProps = {
  getIngredients: () => undefined,
  ingredients: [],
  query: "",
  setQuery: () => undefined
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
