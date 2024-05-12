import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I am on the automationpractice website", async ({ page }) => {
  await page.goto("http://automationpractice.pl");
});

When("I search for an non existing item", async ({ page }) => {
  const search = page.locator("#search_query_top");
  await search.fill("not existing item");
  await search.press("Enter");
});

Then("I should not see the item", async ({ page }) => {
  const product = page
    .locator(".product_list")
    .getByRole("listitem")
    .filter({ hasText: "not existing item" });

  const count = await product.count();
  expect(count).toBe(0);
});
