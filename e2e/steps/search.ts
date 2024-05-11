import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
//import { Given, Then } from "@cucumber/cucumber";

const { Given, When, Then } = createBdd();

Given("I am on the automationpractice website", async ({ page }) => {
  await page.goto("http://automationpractice.pl");
});

When("I search for an <item>", ({ page }) => {
  expect(page.getByPlaceholder("Search").isVisible);
});

Then("I should see the item I searched for on the results grid", ({ page }) => {
  expect(page.getByPlaceholder("Search").isVisible);
});
