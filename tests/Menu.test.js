const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize } = require("../db");
const Menu = require("../models/Menu");
const Item = require("../models/Item");

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

  test("Has an item", async () => {
    const menu = await Menu.create({
      title: "PERi-PERi Chicken",
    });

    const item = await Item.create({
      name: "Chicken Butterfly",
      price: 8.25,
    });

    menu.addItem(item);

    const items = await menu.getItems();

    expect(items[0].name).toBe("Chicken Butterfly");
    expect(items[0].price).toBe(8.25);
  });
});
