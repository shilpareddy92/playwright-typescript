import { test, expect } from "@playwright/test";
import { readExcelFile } from "../../src/utils/ExcelHelper";
import path from "path";

//npm install xlsx
const filePath = path.join(__dirname, "../../test-data/qa/TestData.xlsx");

const records = readExcelFile(filePath);

for (const record of records) {
  test(`Data Driven Testing Using Excel file in playwright: ${record.Skill1}`, async ({
    page,
  }) => {
    /* console.log(`Excel file row data`);
    console.log(`Skill 1 : ${record.Skill1}`);
    console.log(`Skill 2 : ${record.Skill2}`); */
    // Go to URL
    await page.goto(`${process.env.YOUTUBE_URL}`);
    // Wait for the page to load
    await page.waitForLoadState("domcontentloaded");

    // Verify URL, title, text, count,
    await page.locator("//input[@name='search_query']").first().click();
    await page.locator("//input[@name='search_query']").fill(record.Skill1);
    await page.locator("//input[@name='search_query']").press("Enter");
    console.log(await page.title());
    console.log(record.Skill1 + " - YouTube");
    await expect(page).toHaveTitle(record.Skill1 + " - YouTube");
  });

  test(`Data Driven Testing Using Excel file in playwright: ${record.Skill2}`, async ({
    page,
  }) => {
    /* console.log(`Excel file row data`);
    console.log(`Skill 1 : ${record.Skill1}`);
    console.log(`Skill 2 : ${record.Skill2}`); */
    // Go to URL
    await page.goto(`${process.env.YOUTUBE_URL}`);
    // Wait for the page to load
    await page.waitForLoadState("domcontentloaded");

    // Verify URL, title, text, count,
    await page.locator("//input[@name='search_query']").first().click();
    await page.locator("//input[@name='search_query']").fill(record.Skill2);
    await page.locator("//input[@name='search_query']").press("Enter");
    console.log(await page.title());
    console.log(record.Skill2 + " - YouTube");
    await expect(page).toHaveTitle(record.Skill2 + " - YouTube");
  });
}
