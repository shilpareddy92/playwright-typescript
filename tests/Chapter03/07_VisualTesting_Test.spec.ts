//Import playwright module
import { test, expect } from "@playwright/test";

test("Visual Comparison in Playwright", async ({ page }) => {
     // Go to URL
    await page.goto('https://github.com/login');

    // Compare page screnshots
    //await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator('#login_field').fill('playwright with typescript')
    //await expect(page).toHaveScreenshot('GitHubLoginPage.png');
});
