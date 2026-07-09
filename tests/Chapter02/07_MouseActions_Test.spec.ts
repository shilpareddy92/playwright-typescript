import { test, expect } from "@playwright/test";

test("Mouse actions", async ({ page }) => {
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  /*  // Left button click
  await page
    .getByRole("link", { name: "Playwright TypeScript by Testers Talk ✅" })
    .click({ button: 'left'});

   

  
  // Middle button click
  await page
    .getByRole("link", {
      name: "Playwright TypeScript by Testers Talk ✅",
    })
    .click({ button:'middle' }); 

    await page.waitForLoadState("domcontentloaded"); */

  // Middle button click
  await page
    .getByRole("link", {
      name: "Playwright TypeScript by Testers Talk ✅",
    })
    .click({ button: "right" });

  await page.waitForLoadState("domcontentloaded");

  // Mouse hover
  await page.getByLabel("Search with your voice").hover();
  //await page.getByLabel('Search').first().hover();
  // Double click
  await page.getByLabel("Search with your voice").dblclick();
});
