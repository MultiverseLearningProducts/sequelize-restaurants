const { sequelize, DataTypes, Model } = require("../db");

class Item extends Model {}

Item.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Item;
