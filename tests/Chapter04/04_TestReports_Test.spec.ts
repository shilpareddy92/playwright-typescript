// Import playwright module
import { test, expect } from "@playwright/test";

//if we click on arrow button itnext to test.describe all the test inside this group will execute
test.describe("Smoke Testing", () => {
  test("Skip Test1", async ({ page }) => {
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
  });

  test("Skip Test2", async ({ page }) => {
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
  });
});

test.describe("Regression Testing", () => {
  test("Skip Test3", async ({ page }) => {
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
  });
  test("Skip Test4", async ({ page }) => {
    // Go to URL
    await page.goto("https://github.com/ShilpaVallapureddy/");

    /* 1. getByRole()
    <a href="/ShilpaVallapureddy?tab=repositories">
        Repositories
    </a> */

    expect(true).toBe(false)

   
  });

  
});
