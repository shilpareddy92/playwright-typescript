// Import playwright module
import { test, expect } from "@playwright/test";

const searchKeywords = [
  "Playwright by Testers Talk",
  "Cypress by Testers Talk",
  "API Testing by Testers Talk",
];

for (const searchKeyword of searchKeywords) {
  test(`Parameterize Tests in Playwright ${searchKeyword}`, async ({
    page,
  }) => {
    // Go to URL
    await page.goto("https://www.youtube.com/");
    // Wait for the page to load
    await page.waitForLoadState("domcontentloaded");

   
    await page.locator("//input[@name='search_query']").first().click();
    await page
      .locator("//input[@name='search_query']")
      .fill(searchKeyword);
    await page.locator("//input[@name='search_query']").press("Enter");
    console.log(await page.url());
    
  });
}
