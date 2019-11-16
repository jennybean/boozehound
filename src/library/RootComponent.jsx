import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as DrinksSelectors } from "../data/drinks";
import { Selectors as RecipeSelectors } from "../data/recipe";
import LoadingIndicator from "./loading-indicator/LoadingIndicator";
import Filters from "./filters/Filters";
import Drinks from "./drinks/Drinks";
import Recipe from "./recipe/Recipe";
import Search from "./search/Search";

const mapStateToProps = state => ({
  isLoading: DrinksSelectors.isLoading(state),
  recipe: RecipeSelectors.getRecipe(state)
});

const Container = styled.div`
  background-color: #f0f0f0;
  display: flex;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Menu = styled.div`
  height: 100%;
  min-width: 200px;
`;

const RootComponent = ({ isLoading, recipe }) => (
  <Container>
    <Menu>
      <Search />
      <Filters />
    </Menu>
    {isLoading || !recipe.id ? (
      <LoadingIndicator />
    ) : (
      <Wrapper>
        <Recipe />
        <Drinks />
      </Wrapper>
    )}
  </Container>
);

RootComponent.defaultProps = {
  isLoading: true,
  recipe: {}
};

export default connect(mapStateToProps)(RootComponent);
