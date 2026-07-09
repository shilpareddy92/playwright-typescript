// Import playwright module
import { test, expect } from '@playwright/test';


test('Retry', async ({ page }) => {
    // Go to URL
    await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle('Testers Talk - YouTube');

  // Verify the channel name is visible
  await expect(page.getByText("Testers Talk me", { exact: true }).first()
).toBeVisible();
});