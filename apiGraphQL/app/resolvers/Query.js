const { Diet, FoodGroup, Ingredient } = require("../models");

module.exports = {
  // The queries could also be named getFoodGroups, getFoodGroup, etc...
  // It must match the name of the queries in the schema.
  foodgroups: () => FoodGroup.findAll(),
  foodgroup: (_, args) => FoodGroup.findByPk(args.id),
  diets: () => Diet.findAll(),
  diet: (_, args) => Diet.findByPk(args.id),
  ingredients: () => Ingredient.findAll(),
  ingredient: (_, args) => Ingredient.findByPk(args.id),
};