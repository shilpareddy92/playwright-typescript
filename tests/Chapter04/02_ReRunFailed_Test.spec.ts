// Import playwright module
import { test, expect } from "@playwright/test";
test("test1", async ({ page, browser }) => {
  // Go to URL
  await page.goto("https://www.youtube.com/");
  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify URL, title, text, count,
  await page.locator("//input[@name='search_query']").first().click();
  await page
    .locator("//input[@name='search_query']")
    .fill("playwright by testers talk");
  await page
    .locator("//input[@name='search_query']")
    .press("Enter", { timeout: 2000 });
  await expect(page).toHaveURL(
    "https://www.youtube.com/results?search_query=playwright+by+testers+talk",
  );
  await expect(page).toHaveTitle("playwright by testers talk - YouTube");
});
test("test2", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  expect(true).toBe(false)
});


test("test3", async ({ page }) => {
  await page.goto("https://www.resillion.com/");
  expect(true).toBe(false)
});
//npx playwright test --last-failed 