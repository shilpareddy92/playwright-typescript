# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/05_locators.spec.ts >> locator test part_II
- Location: tests/NaveenTests/05_locators.spec.ts:12:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByTestId('username')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - heading "Login" [level=2] [ref=e4]
  - generic [ref=e5]:
    - textbox [ref=e6]
    - generic: Username
  - generic [ref=e7]:
    - textbox [ref=e8]
    - generic: Password
  - button "Login" [ref=e9] [cursor=pointer]
```

# Test source

```ts
  1  | import {
  2  |   test,
  3  |   expect,
  4  |   Browser,
  5  |   Page,
  6  |   Locator,
  7  |   FrameLocator,
  8  | } from "@playwright/test";
  9  | import { log } from "console";
  10 | import { webkit, chromium, firefox } from "playwright";
  11 | 
  12 | test("locator test part_II", async () => {
  13 |   const browser: Browser = await chromium.launch({
  14 |     headless: false,
  15 |     channel: "chrome",
  16 |   });
  17 |   const page: Page = await browser.newPage();
  18 |   await page.goto("http://127.0.0.1:5500/app/app.html");
  19 |   await page.waitForLoadState("domcontentloaded");
  20 | 
> 21 |   await page.getByTestId("username").fill("naveenautomation");
     |                                      ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  22 |   await page.getByTestId("password").fill("naveen123");
  23 |   await page.getByTestId("login").click();
  24 | });
  25 | 
```