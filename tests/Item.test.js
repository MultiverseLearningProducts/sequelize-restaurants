const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize } = require("../db");
const Item = require("../models/Item");

describe("Item", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("Can create an item", async () => {
    const item = await Item.create({
      name: "Chicken Butterfly",
      price: 8.25,
    });

    expect(item.id).toBe(1);
    expect(item.name).toBe("Chicken Butterfly");
    expect(item.price).toBe(8.25);
  });
});
