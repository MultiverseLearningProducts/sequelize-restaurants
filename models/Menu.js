const { sequelize, DataTypes, Model } = require("../db");
const Item = require("./Item");

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

Menu.hasMany(Item, { as: "items", foreignKey: "menu_id" });

module.exports = Menu;
