const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize } = require("../db");
const Restaurant = require("../models/Restaurant");
const Menu = require("../models/Menu");

describe("Restaurant", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("Can create a restaurant", async () => {
    const restaurant = await Restaurant.create({
      name: "Nando's",
      imageURL:
        "https://wembleypark.com/media/images/Nandos_Platter_in_London_Designer_.2e16d0ba.fill-496x279.png",
    });

    expect(restaurant.id).toBe(1);
    expect(restaurant.name).toBe("Nando's");
    expect(restaurant.imageURL).toBe(
      "https://wembleypark.com/media/images/Nandos_Platter_in_London_Designer_.2e16d0ba.fill-496x279.png"
    );
  });

  test("Has a menu", async () => {
    const restaurant = await Restaurant.create({
      name: "Nando's",
      imageURL:
        "https://wembleypark.com/media/images/Nandos_Platter_in_London_Designer_.2e16d0ba.fill-496x279.png",
    });

    const menu = await Menu.create({
      title: "PERi-PERi Chicken",
    });

    // Associate the menu with the restaurant
    restaurant.addMenu(menu);

    // Get all the menus associated with the restaurant
    const menus = await restaurant.getMenus();

    expect(menus[0].title).toBe("PERi-PERi Chicken");
  });
});
