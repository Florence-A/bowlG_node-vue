// Import model from our models file.
const { Ingredient } = require("../../models");

module.exports = {
  ingredients(parent) {
    return parent.getIngredients();
  }
};