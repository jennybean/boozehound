import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as RecipeSelectors } from "../../data/recipe";

const mapStateToProps = state => ({
  recipe: RecipeSelectors.getRecipe(state)
});

const Container = styled.div`
  box-sizing: border-box;
  height: 60%;
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Name = styled.h1`
  font-family: "Meddon", cursive;
`;

const Description = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
  height: 400px;
  justify-content: flex-start;
  margin-left: 50px;
  max-width: 40%;
  min-width: 40%;
  overflow: auto;
  text-align: left;
`;

const Thumbnail = styled.img`
  border-radius: 50%;
  max-height: 300px;
`;

const Recipe = ({
  recipe: { name, thumbnail, instructions, ingredients, glass }
}) => (
  <Container>
    <FlexWrapper>
      <h2>The</h2>
      <Name>{name}</Name>
    </FlexWrapper>
    <FlexWrapper>
      <Thumbnail src={thumbnail} />
      <Description>
        <ul>
          {ingredients.map(({ name, measurement }) => (
            <li key={`${measurement}_${name}`}>
              {measurement} {name}
            </li>
          ))}
        </ul>
        <div>{instructions}</div>
        <br />
        <div>Serve in a {glass}.</div>
      </Description>
    </FlexWrapper>
  </Container>
);

Recipe.defaultProps = {
  recipe: {}
};

export default connect(mapStateToProps)(Recipe);
