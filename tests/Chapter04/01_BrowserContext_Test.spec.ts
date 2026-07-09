// Import playwright module
import { test, expect } from "@playwright/test";
test("Multiple browser/tabs in Playwright TypeScript", async ({
  page,
  browser,
}) => {
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

  // New browser session
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page2.goto("https://www.facebook.com/");
  

  // Create new tabs
  const newTab = await context2.newPage();
  await newTab.goto("https://www.resillion.com/")
});
