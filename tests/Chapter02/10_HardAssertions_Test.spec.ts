import { test, expect } from "@playwright/test";

test("Hard Asserions", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // visible, editable, enabled, empty
  await expect(page.locator("//input[@name='search_query']")).toBeVisible();
  await expect(page.locator("//input[@name='search_query']")).toBeEditable();
  await expect(page.locator("//input[@name='search_query']")).toBeEnabled();
  await expect(page.locator("//input[@name='search_query']")).toBeEmpty();

  // Verify URL, title, text, count,
  await page.locator("//input[@name='search_query']").first().click();
  await page
    .locator("//input[@name='search_query']")
    .fill("playwright by testers talk");
  await page.locator("//input[@name='search_query']").press("Enter");
  await expect(page).toHaveURL(
    "https://www.youtube.com/results?search_query=playwright+by+testers+talk",
  );
  await expect(page).toHaveTitle("playwright by testers talk - YouTube");

  await expect(
    page.locator('//span[text()="Playwright by Testers Talk ✅"]').first(),
  ).toHaveText("Playwright by Testers Talk ✅");
   await expect(page.locator('*[id="title"]')).toHaveCount(5);
});
