const { sequelize, DataTypes, Model } = require("./db");

class Restaurant extends Model {}

Restaurant.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
  }
);

module.exports = Restaurant;
