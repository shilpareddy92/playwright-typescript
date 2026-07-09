// Import playwright module
import { test, expect } from '@playwright/test';

//npx playwright test Chapter03/04_Retry_Test.spec.ts --repeat-each=2

test('My First Playwright TypeScript Test 1',{tag :['@SmokeTesting']}, async ({ page }) => {
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