# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/03_DataDrivenTestingUsingCSV.spec.ts >> Data Driven Testing Using CSV file in playwright: undefined
- Location: tests/Chapter05/03_DataDrivenTestingUsingCSV.spec.ts:39:7

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [ref=e9] [cursor=pointer]:
          - generic [ref=e12]:
            - img
        - generic [ref=e13]:
          - link "YouTube Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e19]:
              - img
          - generic [ref=e20]: IN
        - button "Skip navigation" [ref=e24] [cursor=pointer]:
          - generic [ref=e25]: Skip navigation
      - generic [ref=e29]:
        - search [ref=e30]:
          - generic [ref=e32]:
            - generic [ref=e34]:
              - generic [ref=e38]:
                - img
              - combobox "Search" [expanded] [active] [ref=e39]
            - button "Search" [ref=e40] [cursor=pointer]:
              - generic [ref=e43]:
                - img
        - generic [ref=e45]:
          - button "Search with your voice" [ref=e47] [cursor=pointer]:
            - generic [ref=e51]:
              - img
          - tooltip "tooltip"
      - generic [ref=e56]:
        - button "Settings" [ref=e61] [cursor=pointer]:
          - generic [ref=e64]:
            - img
        - link "Sign in" [ref=e67] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
          - generic [ref=e71]:
            - img
          - generic [ref=e72]: Sign in
  - navigation [ref=e76]:
    - generic [ref=e77]:
      - link "Home" [ref=e79] [cursor=pointer]:
        - /url: /
        - generic [ref=e82]:
          - img
        - generic [ref=e83]: Home
      - link "Shorts" [ref=e85] [cursor=pointer]:
        - /url: /shorts/
        - generic [ref=e88]:
          - img
        - generic [ref=e89]: Shorts
      - link "Subscriptions" [ref=e91] [cursor=pointer]:
        - /url: /feed/subscriptions
        - generic [ref=e94]:
          - img
        - generic [ref=e95]: Subscriptions
      - link "You" [ref=e97] [cursor=pointer]:
        - /url: /feed/you
        - generic [ref=e100]:
          - img
        - generic [ref=e101]: You
  - generic [ref=e102]:
    - main [ref=e103]:
      - generic [ref=e113]:
        - heading "Try searching to get started" [level=2] [ref=e114]
        - generic [ref=e115]: Start watching videos to help us build a feed of videos you'll love.
    - text: •
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import { parse } from 'csv-parse/sync';
  4  | import fs from 'fs';
  5  | import path from 'path';
  6  | 
  7  | 
  8  | //npm install csv-parse
  9  | type TestRecords = {
  10 |   Skill1: string;
  11 |   Skill2: string;
  12 | }
  13 | const records = parse(
  14 |     fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
  15 |     {
  16 |         columns: true,
  17 |         skipEmptyLines: true
  18 |     }
  19 | ) as TestRecords[];
  20 | 
  21 | for (const record of records) {
  22 |   test(`Data Driven Testing Using CSV file in playwright: ${record.Skill1}`, async ({
  23 |     page,
  24 |   }) => {
  25 |     // Go to URL
  26 |     await page.goto(`${process.env.YOUTUBE_URL}`);
  27 |     // Wait for the page to load
  28 |     await page.waitForLoadState("domcontentloaded");
  29 | 
  30 |     // Verify URL, title, text, count,
  31 |     await page.locator("//input[@name='search_query']").first().click();
  32 |     await page.locator("//input[@name='search_query']").fill(record.Skill1);
  33 |     await page.locator("//input[@name='search_query']").press("Enter");
  34 |     console.log(await page.title());
  35 |     console.log(record.Skill1 + " - YouTube");
  36 |     await expect(page).toHaveTitle(record.Skill1 + " - YouTube");
  37 |   });
  38 | 
  39 |   test(`Data Driven Testing Using CSV file in playwright: ${record.Skill2}`, async ({
  40 |     page,
  41 |   }) => {
  42 |     // Go to URL
  43 |     await page.goto(`${process.env.YOUTUBE_URL}`);
  44 |     // Wait for the page to load
  45 |     await page.waitForLoadState("domcontentloaded");
  46 | 
  47 |     // Verify URL, title, text, count,
  48 |     await page.locator("//input[@name='search_query']").first().click();
> 49 |     await page.locator("//input[@name='search_query']").fill(record.Skill2);
     |                                                         ^ Error: locator.fill: value: expected string, got undefined
  50 |     await page.locator("//input[@name='search_query']").press("Enter");
  51 |     console.log(await page.title());
  52 |     console.log(record.Skill2 + " - YouTube");
  53 |     await expect(page).toHaveTitle(record.Skill2 + " - YouTube");
  54 |   });
  55 | }
  56 | 
```