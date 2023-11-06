const Diet = require("./types/Diet");
const FoodGroup = require("./types/FoodGroup");
const Ingredient = require("./types/Ingredient");
const Query = require("./Query");

// Important: The name of the properties must match the name of the queries/mutations in the schema.

module.exports = {
  Diet,
  FoodGroup,
  Ingredient,
  Query
};