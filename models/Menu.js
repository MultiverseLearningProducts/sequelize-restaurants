const { sequelize, DataTypes, Model } = require("../db");

class Menu extends Model {}

Menu.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Menu;
