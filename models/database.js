const { Sequelize } = require("sequelize");
const { DIALECT, DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
const sequelize = new Sequelize({
  dialect: DIALECT || "mysql",
  host: DB_HOST || "localhost",
  username: DB_USER || "root",
  password: DB_PASS || "",
  database: DB_NAME || "ProductManagement",
  logging: false,
});

module.exports = sequelize;
