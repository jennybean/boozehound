import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Selectors as DrinksSelectors } from "../../data/drinks";
import { Selectors as QuerySelectors } from "../../data/query";

const mapStateToProps = state => ({
  drinks: DrinksSelectors.getDrinks(state),
  query: QuerySelectors.getQuery(state)
});

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

const Menu = ({ drinks, query }) =>
  !drinks.length ? null : (
    <div>
      <h1>{query} Drinks</h1>
      <DrinksWrapper>
        {drinks.map(({ name, id, thumbnail }) => (
          <CardWrapper key={id}>
            <Thumbanil src={thumbnail} />
            <Name>{name}</Name>
          </CardWrapper>
        ))}
      </DrinksWrapper>
    </div>
  );

Menu.defaultProps = {
  drinks: []
};

export default connect(mapStateToProps)(Menu);
