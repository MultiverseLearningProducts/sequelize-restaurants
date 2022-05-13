const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize } = require("../db");
const Menu = require("../models/Menu");

describe("Menu", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("Can create a menu", async () => {
    const menu = await Menu.create({
      title: "PERi-PERi Chicken",
    });

    expect(menu.id).toBe(1);
    expect(menu.title).toBe("PERi-PERi Chicken");
  });
});
