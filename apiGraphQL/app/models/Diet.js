const { Model, DataTypes } = require("sequelize");

const connection = require("../database/sequelize.js")();

class Diet extends Model {}

Diet.init(
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
        modelName: "Diet",
        tableName: "diet",
    }
);

module.exports = Diet;