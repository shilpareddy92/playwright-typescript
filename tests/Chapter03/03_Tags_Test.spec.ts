import { test, expect } from "@playwright/test";
//npx playwright test --grep '@Smoke'

test("Test1", {tag:['@Regression']},async ({ page }) => {
  // Navigate to the YouTube channel
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle('Testers Talk - YouTube');

  // Verify the channel name is visible
  await expect(page.getByText("Testers Talk", { exact: true }).first()
).toBeVisible();

});
test("Test2", {tag:['@Smoke']},async ({ page }) => {
  // Navigate to the YouTube channel
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle('Testers Talk - YouTube');

  // Verify the channel name is visible
  await expect(page.getByText("Testers Talk", { exact: true }).first()
).toBeVisible();

});

test("Test3",{tag:['@Smoke','@Regression']}, async ({ page }) => {
  // Navigate to the YouTube channel
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle('Testers Talk - YouTube');

  // Verify the channel name is visible
  await expect(page.getByText("Testers Talk", { exact: true }).first()
).toBeVisible();

});