# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/17_mobileView.spec.ts >> 
- Location: tests/NaveenTests/17_mobileView.spec.ts:4:5

# Error details

```
TimeoutError: page.screenshot: Timeout 10000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Test source

```ts
  1  | import { test, devices, chromium } from "@playwright/test";
  2  | 
  3  | const device = devices["iPhone 15"];
  4  | test("", async ({}) => {
  5  |   const browser = await chromium.launch();
  6  |   const context = await browser.newContext({ ...device });
  7  |   const page = await context.newPage();
  8  |   page.goto("https://www.youtube.com/");
> 9  |   await page.screenshot({ path: "youtube-mobile.png" });
     |              ^ TimeoutError: page.screenshot: Timeout 10000ms exceeded.
  10 | 
  11 |   await page.waitForLoadState("domcontentloaded");
  12 | });
  13 | 
```