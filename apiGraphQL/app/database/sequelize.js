const { Sequelize } = require("sequelize");

function connect() {
  return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    define: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_ENV,
    logging: false
  });
}

module.exports = connect;