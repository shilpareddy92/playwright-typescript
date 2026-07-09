import { test, expect } from '@playwright/test';

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';


//npm install csv-parse
type TestRecords = {
  Skill1: string;
  Skill2: string;
}
const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skipEmptyLines: true
    }
) as TestRecords[];

for (const record of records) {
  test(`Data Driven Testing Using CSV file in playwright: ${record.Skill1}`, async ({
    page,
  }) => {
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
}
