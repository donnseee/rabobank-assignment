import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "./fixtures";

const { Given, When, Then } = createBdd(test);

Given(
  "I choose a product in stock from the catalog",
  async ({ categoryPage }) => {
    await categoryPage.open("Women");
    await categoryPage.toListView();
    await categoryPage.openProductDetails("Blouse");
  }
);

When("I add the item to the cart", async ({ page, categoryPage }) => {
  await page.waitForTimeout(2000);
  await categoryPage.changeSize("M");
  await categoryPage.addToCart();
  await page.getByTitle("Continue shopping").click();
});

Then("I can verify that item is added to the cart", async ({ page }) => {
  const cart = page.getByTitle("View my shopping cart");
  await expect(cart).toHaveText(new RegExp("1"));
});
