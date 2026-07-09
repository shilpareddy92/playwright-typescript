import { test, expect } from "@playwright/test";

test("Record At Cursor_Test", async ({ page }) => {
  // Navigate to the YouTube channel
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle('Testers Talk - YouTube');

  // Verify the channel name is visible
  await expect(page.getByText("Testers Talk", { exact: true }).first()
).toBeVisible();


await page.locator('#metadata-container').getByRole('link', { name: '#1 Playwright Automation' }).click();
await expect(page.locator('#above-the-fold').getByText('#1 Playwright Automation')).toBeVisible();
await expect(page.locator('#above-the-fold')).toContainText('#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial');

});
