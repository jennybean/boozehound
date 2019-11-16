import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as DrinksSelectors } from "../../data/drinks";
import {
  Actions as RecipeActions,
  Selectors as RecipeSelectors
} from "../../data/recipe";
import { Selectors as QuerySelectors } from "../../data/query";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

const mapStateToProps = state => ({
  drinks: DrinksSelectors.getDrinks(state),
  isLoading: DrinksSelectors.isLoading(state),
  query: QuerySelectors.getQuery(state),
  recipe: RecipeSelectors.getRecipe(state)
});

const mapDispatchToProps = {
  getRecipe: RecipeActions.getRecipe
};

const DrinksWrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  padding-top: 30px;
  width: 100%;
`;

const Card = styled.div`
  align-items: flex-end;
  background-color: white;
  cursor: pointer;
  display: flex;
  height: 150px;
  justify-content: center;
  max-width: 200px;
  min-width: 200px;
  padding: 20px;
  position: relative;
  border: ${props => (props.isSelected ? "1px solid cornflowerblue" : "none")};
`;

const CardWrapper = styled(Card)`
  margin-bottom: 30px;
  margin-right: 10px;
`;

const Thumbanil = styled.img`
  border-radius: 50%;
  bottom: 60px;
  height: 150px;
  position: absolute;
  right: 45px;
`;

const Name = styled.div`
  font-weight: bold;
  text-align: center;
`;

const Drinks = ({ drinks, getRecipe, isLoading, query, recipe }) => {
  if (!drinks.length) return null;
  if (isLoading) return <LoadingIndicator />;

  const handleClick = id => {
    getRecipe(id);
  };

  return (
    <Fragment>
      <h2>{query} Drinks</h2>
      <DrinksWrapper>
        {drinks.map(({ name, id, thumbnail }) => (
          <CardWrapper
            key={id}
            isSelected={recipe.id === id}
            onClick={() => handleClick(id)}
          >
            <Thumbanil src={thumbnail} />
            <Name>{name}</Name>
          </CardWrapper>
        ))}
      </DrinksWrapper>
    </Fragment>
  );
};

Drinks.defaultProps = {
  drinks: [],
  isLoading: true,
  getRecipe: () => undefined,
  query: "",
  recipe: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
