import { Page } from "@playwright/test";
import { test as base } from "playwright-bdd";

type Fixtures = {
  productComparePage: ProductComparePage;
};

class ProductComparePage {
  constructor(public page: Page) {}

  async open() {
    await this.page.goto("http://automationpractice.pl");
    await this.page
      .locator("#block_top_menu")
      .getByRole("link", { name: "Women" })
      .click();
  }
}

export const test = base.extend<Fixtures>({
  productComparePage: ({ page }, use) => use(new ProductComparePage(page)),
});
