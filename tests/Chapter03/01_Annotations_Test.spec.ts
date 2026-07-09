// Import playwright module
import { test, expect } from '@playwright/test';

//test.skip for skipping
test('Skip Test1', async ({ page }) => {
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

test('Skip Test2', async ({ page }) => {
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

//run only required Test file
test.only('Skip Test3', async ({ page }) => {
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