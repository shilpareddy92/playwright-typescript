import { test, expect } from "@playwright/test";

//after enablelng in config file npm install dotenv --save
test("Read ENV file config in playwright'", async ({ page, browser }) => {
  // Go to URL
  await page.goto(`${process.env.YOUTUBE_URL}`);
  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

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
});
