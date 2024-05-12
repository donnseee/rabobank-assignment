import { Page } from "@playwright/test";

export class CategoryPage {
  constructor(public page: Page) {}

  async open(category: string) {
    await this.page.goto("http://automationpractice.pl");
    await this.page
      .locator("#block_top_menu")
      .getByRole("link", { name: category })
      .click();
  }

  async toListView() {
    await this.page.getByRole("link", { name: "List" }).click();
  }

  async openProductDetails(name: string) {
    await this.page
      .locator(".product_list")
      .getByRole("listitem")
      .filter({ hasText: name })
      .getByText(name)
      .first()
      .click();
  }

  async changeSize(size: string) {
    await this.page.getByLabel("Size").selectOption({ label: size });
  }

  async addToCart() {
    await this.page.getByRole("button", { name: "Add to Cart" }).click();
  }

  async addToCompare(name: string) {
    await this.page
      .locator(".product_list")
      .getByRole("listitem")
      .filter({ hasText: name })
      .getByRole("link", { name: "Add to Compare" })
      .first()
      .click({ force: true });
  }
}
