const Diet = require("./Diet");
const FoodGroup = require("./FoodGroup");
const Ingredient = require("./Ingredient");


Ingredient.belongsTo(FoodGroup, {
  foreignKey: "food_group_id",
  as: "food_group"
});

FoodGroup.belongsToMany(Ingredient, {
  foreignKey: "food_group_id",
  as: "ingredients"
});

Ingredient.belongsToMany(Diet, {
    through: "ingredient_has_diets",
    foreign_key: "diet_id",
    onDelete: "CASCADE"
});

Diet.belongsToMany(Ingredient, {
    through: "ingredient_has_diets",
    foreign_key: "ingredient_id",
    onDelete: "CASCADE"    
})

module.exports = { Diet, Ingredient, FoodGroup };