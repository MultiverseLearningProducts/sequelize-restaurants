const { sequelize, DataTypes, Model } = require("../db");

class Menu extends Model {}

Menu.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Menu;
