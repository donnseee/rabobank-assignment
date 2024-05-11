import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "./fixtures";
//import { Given, Then } from "@cucumber/cucumber";

const { Given, When, Then } = createBdd(test);

Given(
  "I choose an item from the catalog",
  async ({ productComparePage }, url) => {
    await productComparePage.open();
  }
);

When("I add the an item to compare", async ({ page }) => {
  const items = page.locator(".product_list");
  await items
    .filter({
      has: page.getByRole("link", { name: "Faded Short Sleeve T-shirts" }),
    })
    .first()
    .hover();

  await page
    .getByRole("link", { name: "Add to Compare" })
    .dispatchEvent("click");
});

Then("I can see the item is added on the compare section", async ({ page }) => {
  const input = page.locator("input[name='compare_product_count']").first();
  const value = await input.inputValue();
  console.log(value);
});
