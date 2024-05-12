import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "./fixtures";
//import { Given, Then } from "@cucumber/cucumber";

const { Given, When, Then } = createBdd(test);

Given("I choose an item from the catalog", async ({ categoryPage }) => {
  await categoryPage.open("Women");
  await categoryPage.toListView();
});

When("I add the item to Add to compare", async ({ categoryPage, page }) => {
  await page.waitForTimeout(2000);
  await page.locator(".add_to_compare").first().click();
});

Then("I can see the item is added on the compare section", async ({ page }) => {
  await page.waitForTimeout(2000);

  const count = await page
    .locator("input[name='compare_product_count']")
    .first()
    .inputValue();
  expect(count).toBe("1");
});
