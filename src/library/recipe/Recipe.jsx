import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as RecipeSelectors } from "../../data/recipe";

const mapStateToProps = state => ({
  recipe: RecipeSelectors.getRecipe(state)
});

const Name = styled.h1`
  font-family: "Meddon", cursive;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Description = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Instructions = styled.div`
  max-width: 50%;
`;

const Thumbnail = styled.img`
  border-radius: 50%;
`;

const Recipe = ({
  recipe: { name, thumbnail, instructions, ingredients, glass }
}) => (
  <FlexWrapper>
    <Description>
      <FlexWrapper>
        <h2>The</h2>
        <Name>{name}</Name>
      </FlexWrapper>
      <Instructions>
        <ul>
          {ingredients.map(({ name, measurement }) => (
            <li>
              {measurement} {name}
            </li>
          ))}
        </ul>
        <div>{instructions}</div>
        <br />
        <div>Serve in a {glass}.</div>
      </Instructions>
    </Description>
    <Thumbnail src={thumbnail} />
  </FlexWrapper>
);

Recipe.defaultProps = {
  recipe: {}
};

export default connect(mapStateToProps)(Recipe);
