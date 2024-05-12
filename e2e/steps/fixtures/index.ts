import { test as base } from "playwright-bdd";
import { CategoryPage } from "./category-page";

type Fixtures = {
  categoryPage: CategoryPage;
};

export const test = base.extend<Fixtures>({
  categoryPage: ({ page }, use) => use(new CategoryPage(page)),
});
