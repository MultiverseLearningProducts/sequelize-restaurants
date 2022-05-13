const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db.sqlite",
});

module.exports = { sequelize, DataTypes, Model };
