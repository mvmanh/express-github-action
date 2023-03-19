const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Account", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validator: {
        isEmail: {
          args: true,
          msg: "This is not a valid email address",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validator: {
        min: {
          args: 15,
          msg: "User age must greater than or equal to 15",
        },
        max: 100,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validator: {
        len: [6, 30],
      },
    },
  });
};
