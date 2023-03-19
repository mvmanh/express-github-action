const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validator: {
        min: 100,
        max: 100000,
      },
    },
  });
};
