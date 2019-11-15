import React from "react";
import { connect } from "react-redux";
import { Selectors as RecipeSelectors } from "../../data/recipe";
import Modal from "../modal/Modal";
import Recipe from "./Recipe";

const mapStateToProps = state => ({
  isLoading: RecipeSelectors.isLoading(state)
});

const RecipeModal = props => (
  <Modal {...props}>
    <Recipe />
  </Modal>
);

Recipe.defaultProps = {
  isLoading: true
};

export default connect(mapStateToProps)(RecipeModal);
