import React from "react";
import { connect } from "react-redux";
import { Selectors as DrinksSelectors } from "../../data/drinks";
import { Selectors as QuerySelectors } from "../../data/query";

const mapStateToProps = state => ({
  drinks: DrinksSelectors.getDrinks(state),
  query: QuerySelectors.getQuery(state)
});

const Menu = ({ drinks, query }) =>
  !drinks.length ? null : (
    <div>
      <h1>{query} Drinks</h1>
      {drinks.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );

Menu.defaultProps = {
  drinks: []
};

export default connect(mapStateToProps)(Menu);
