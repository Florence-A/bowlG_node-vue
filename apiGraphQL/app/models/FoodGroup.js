const { Model, DataTypes } = require("sequelize");

const connection = require("../database/sequelize.js")();

class FoodGroup extends Model {}

FoodGroup.init(
    // Init Object 1 : Ingrédient description
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    // Init Object 2 : sequelize connection
    {
        sequelize: connection,
        modelName: "FoodGroup",
        tableName: "food_group",
    }
);

module.exports = FoodGroup;