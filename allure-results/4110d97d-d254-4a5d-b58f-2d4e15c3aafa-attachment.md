# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/01_ReadENVFile_Test.spec.ts >> Read ENV file config in playwright'
- Location: tests/Chapter05/01_ReadENVFile_Test.spec.ts:3:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Read ENV file config in playwright'", async ({ page, browser }) => {
  4  |   // Go to URL
> 5  |   await page.goto(`${process.env.YOUTUBE_URL}`);
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  6  |   // Wait for the page to load
  7  |   await page.waitForLoadState("domcontentloaded");
  8  | 
  9  |   // Verify URL, title, text, count,
  10 |   await page.locator("//input[@name='search_query']").first().click();
  11 |   await page
  12 |     .locator("//input[@name='search_query']")
  13 |     .fill("playwright by testers talk");
  14 |   await page
  15 |     .locator("//input[@name='search_query']")
  16 |     .press("Enter");
  17 |   await expect(page).toHaveURL(
  18 |     "https://www.youtube.com/results?search_query=playwright+by+testers+talk",
  19 |   );
  20 |   await expect(page).toHaveTitle("playwright by testers talk - YouTube");
  21 | });
  22 | 
```