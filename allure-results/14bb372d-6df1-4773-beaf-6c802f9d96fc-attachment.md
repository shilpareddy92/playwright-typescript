# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/17_mobileView.spec.ts >> 
- Location: tests/NaveenTests/17_mobileView.spec.ts:4:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.youtube.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, devices, chromium } from "@playwright/test";
  2  | 
  3  | const device = devices["iPhone 15"];
  4  | test("", async ({ page }) => {
  5  |   const browser = await chromium.launch();
  6  |   const context = await browser.newContext({...device});
> 7  |   page.goto("https://www.youtube.com/");
     |        ^ Error: page.goto: Test ended.
  8  |   await page.screenshot({ path: "youtube-mobile.png" });
  9  | 
  10 |   await page.waitForLoadState("domcontentloaded");
  11 | });
  12 | 
```