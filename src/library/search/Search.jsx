import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as IngredientsSelectors } from "../../data/ingredients";
import { Actions as QueryActions } from "../../data/query";

const mapStateToProps = state => ({
  ingredients: IngredientsSelectors.getIngredients(state)
});

const mapDispatchToProps = {
  setQuery: QueryActions.setQuery
};

const Container = styled.div`
  margin-left: 5px;
`;

const Input = styled.input`
  border: 1px solid white;
  padding: 5px;
  width: 180px;
  :focus {
    outline: none;
    border: 1px solid cornflowerblue;
  }
`;

const Dropdown = styled.div`
  background-color: white;
  position: absolute;
`;

const Option = styled.div`
  padding: 5px;
  width: 180px;
  :hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const Search = ({ ingredients, setQuery }) => {
  const [value, setValue] = useState("");
  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSelect = ingredient => {
    setValue("");
    setQuery(ingredient);
  };

  return (
    <div>
      <h2>Search</h2>
      <Container>
        <Input name="search" value={value} onChange={handleChange} />
        {value !== "" && (
          <Dropdown>
            {ingredients
              .filter(ingredient =>
                ingredient.toLowerCase().startsWith(value.toLowerCase())
              )
              .map(ingredient => (
                <Option
                  key={`option_${ingredient}`}
                  onClick={() => handleSelect(ingredient)}
                >
                  {ingredient}
                </Option>
              ))}
          </Dropdown>
        )}
      </Container>
    </div>
  );
};

Search.defaultProps = {
  ingredients: [],
  setQuery: () => undefined
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
