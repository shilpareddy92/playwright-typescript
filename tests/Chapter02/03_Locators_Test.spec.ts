import { test, expect } from "@playwright/test";

test("Locators in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/ShilpaVallapureddy/");

  /* 1. getByRole()
    <a href="/ShilpaVallapureddy?tab=repositories">
        Repositories
    </a> */

  await page.getByRole("link", { name: "Repositories" }).click();
  await page.getByRole("link", { name: "Sign in" }).isVisible();

  // 2.GetBylabel aria-label/accessible label
  await page.getByLabel("Homepage", { exact: true }).first().click();
  await page.getByLabel("Dismiss error", { exact: true }).isVisible();

  /* 3.getByAltText
  <img
    class="avatar"
    alt="View shilpavallapureddy's full-sized avatar"
    src="profile.png"> */

  await page.goto("https://github.com/ShilpaVallapureddy/");

  await page
    .getByAltText("View shilpavallapureddy's full-sized avatar")
    .click();

  // 4.GetByTestId
  await page.goto("https://github.com/ShilpaVallapureddy/");
  await page.getByTestId("projects").first().click();
  await page.getByTestId("repositories").first().click();

  // 5.GetByText Used for: Visible text on the page.
  /* <a>Overview</a>
    <span>Sign up</span> */
  await page.getByText("Sign up").click();

  // 6.GetByPlaceholder, 7.Xpath, 8.CSSSelectors
  await page.goto("https://www.youtube.com/@testerstalk");
  /**getByPlaceholder() GitHub search input contains placeholder text.
 * <input
    placeholder="Search"
    type="search">
 */
  await page.getByPlaceholder("Search").fill("cypress by testers talk");
  await page
    .locator("//input[@name='search_query']")
    .first()
    .fill("playwright typescript by testers talk'");
  await page
    .locator("input[name='search_query']")
    .first()
    .fill("Naveen automation labs");

  /* GetByTitle Some GitHub icons and buttons have title attributes.
  <a title="Home">
    GitHub
</a>
  await page.goto("https://www.facebook.com/");
  const title = await page.title();
  await page.console.log(title);*/

  await page.goto("https://www.google.com/");
  await page.getByTitle("Search").fill("playwright javascript by testers talk");
});
