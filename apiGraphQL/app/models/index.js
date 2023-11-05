const Diet = require("./Diet");
const FoodGroup = require("./FoodGroup");
const Ingredient = require("./Ingredient");


Ingredient.belongsTo(FoodGroup, {
  foreignKey: "food_group_id",
  as: "food_group"
});

FoodGroup.hasMany(Ingredient, {
  foreignKey: "food_group_id",
  as: "ingredients"
});

Ingredient.hasMany(Diet, {
    through: "ingredient_has_diets",
    foreign_key: "diet_id",
    onDelete: "CASCADE"
});

Diet.hasMany(Ingredient, {
    through: "ingredient_has_diets",
    foreign_key: "ingredient_id",
    onDelete: "CASCADE"    
})

module.exports = { Diet, Ingredient, FoodGroup };