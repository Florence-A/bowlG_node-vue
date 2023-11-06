// Import model from our models file.
const { FoodGroup, Diet } = require("../../models");

module.exports = {
  // The parent refers to the current object of type ingredient.
  // When asking for the foodGroup field...
  food_group(parent) {
    // ...return all the foodGroup that are linked to the current ingredient_id.
    return FoodGroup.findByPk(parent.food_group_id);
    // return parent.getfoodGroup();
  },
  diets(parent) {
    return parent.getDiets();
  }
};