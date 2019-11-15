import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Selectors as DrinksSelectors } from "../../data/drinks";

const mapStateToProps = state => ({
  drinks: DrinksSelectors.getDrinks(state)
});

const Menu = ({ drinks }) => (
  <Fragment>
    {drinks.map(({ name, id }) => (
      <div key={id}>{name}</div>
    ))}
  </Fragment>
);

Menu.defaultProps = {
  drinks: []
};

export default connect(mapStateToProps)(Menu);
