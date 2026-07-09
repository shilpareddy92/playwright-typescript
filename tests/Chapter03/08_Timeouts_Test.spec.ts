import { test, expect } from "@playwright/test";
test("Timeouts in Playwright ", async ({ page }) => {
  test.setTimeout(1 * 60 * 1000);
  // Go to URL
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
  await page.locator("//input[@name='search_query']").press("Enter",{timeout:2000});
  await expect(page).toHaveURL(
    "https://www.youtube.com/results?search_query=playwright+by+testers+talk",
  );
  await expect(page).toHaveTitle("playwright by testers talk - YouTube",{timeout:5000});

  //await page.waitForTimeout(60000);
});

/**
 * Global timeout:1*60*1000, in playwright config file
 * individual(test timeout) test.setTimeout(1 * 60 * 1000); this is most considered
 * assertion timeout  in playwright config file
 * expect:{
    timeout: 2 * 60 * 1000,
  }, and  await expect(page).toHaveTitle("playwright by testers talk - YouTube",{timeout:5000});
  Action Timout: actionTimeout:10000, in playwright config file under use
  await page.locator("//input[@name='search_quer']").press("Enter",{timeout:2000});
  Global timeout:globalTimeout : 60 * 60 * 1000, in playwright config file
 */
