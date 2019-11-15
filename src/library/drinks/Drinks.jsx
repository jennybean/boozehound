import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as DrinksSelectors } from "../../data/drinks";
import { Actions as RecipeActions } from "../../data/recipe";
import { Selectors as QuerySelectors } from "../../data/query";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
import RecipeModal from "../recipe/RecipeModal";

const mapStateToProps = state => ({
  drinks: DrinksSelectors.getDrinks(state),
  isLoading: DrinksSelectors.isLoading(state),
  query: QuerySelectors.getQuery(state)
});

const mapDispatchToProps = {
  getRecipe: RecipeActions.getRecipe
};

const DrinksWrapper = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  overflow-y: auto;
  padding-top: 50px;
`;

const Card = styled.div`
  align-items: flex-end;
  background-color: white;
  display: flex;
  height: 150px;
  justify-content: center;
  padding: 20px;
  position: relative;
  width: 200px;
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

const Drinks = ({ drinks, getRecipe, isLoading, query }) => {
  const [showModal, setShowModal] = useState(false);
  if (!drinks.length) return null;
  if (isLoading) return <LoadingIndicator />;

  const handleClick = id => {
    setShowModal(true);
    getRecipe(id);
  };

  return (
    <div>
      <h1>{query} Drinks</h1>
      <DrinksWrapper>
        {drinks.map(({ name, id, thumbnail }) => (
          <CardWrapper key={id}>
            <Thumbanil onClick={() => handleClick(id)} src={thumbnail} />
            <Name>{name}</Name>
          </CardWrapper>
        ))}
      </DrinksWrapper>
      {showModal && <RecipeModal closeModal={() => setShowModal(false)} />}
    </div>
  );
};

Drinks.defaultProps = {
  drinks: [],
  isLoading: true,
  getRecipe: () => undefined,
  query: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
