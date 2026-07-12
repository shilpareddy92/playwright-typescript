# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/06_NoIncognito.spec.ts >> No Incognito test
- Location: tests/NaveenTests/06_NoIncognito.spec.ts:14:5

# Error details

```
Error: browserType.launchPersistentContext: Unsupported webkit channel "chrome"
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
  8  |   BrowserContext,
  9  | } from "@playwright/test";
  10 | import { log } from "console";
  11 | import { channel } from "diagnostics_channel";
  12 | import { webkit, chromium, firefox } from "playwright";
  13 | 
  14 | test("No Incognito test", async () => {
> 15 |   const browser: BrowserContext = await webkit.launchPersistentContext("", {
     |                                   ^ Error: browserType.launchPersistentContext: Unsupported webkit channel "chrome"
  16 |     headless: false,
  17 |   });
  18 | });
  19 | 
```