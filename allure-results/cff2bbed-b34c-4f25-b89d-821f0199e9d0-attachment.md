# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/13_singlefileupload.spec.ts >> Single File using file chooser 
- Location: tests/NaveenTests/13_singlefileupload.spec.ts:51:5

# Error details

```
TimeoutError: page.waitForEvent: Timeout 10000ms exceeded while waiting for event "filechooser"
=========================== logs ===========================
waiting for event "filechooser"
============================================================
```

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByLabel('Upload resume').first()
    - locator resolved to <input type="file" id="file-upload" data-testid="file-upload-input" accept=".pdf, .txt, .doc, .docx"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e10]:
    - generic [ref=e11]:
      - generic [ref=e13]:
        - generic "Back to the home page" [ref=e14]:
          - link "Robert Half logo" [ref=e15] [cursor=pointer]:
            - /url: https://www.roberthalf.com/au/en
            - img "Robert Half logo" [ref=e16]
        - button "Close" [ref=e17] [cursor=pointer]:
          - generic [ref=e19]:
            - generic [ref=e20]: 
            - generic [ref=e21]: Close
      - generic [ref=e23]:
        - generic [ref=e25]:
          - heading "Upload your resume to be considered for jobs that match" [level=1] [ref=e26]:
            - generic: Upload your resume to be considered for jobs that match
          - button "Upload resume" [ref=e31] [cursor=pointer]
        - generic [ref=e35]:
          - text: Please do not submit any sensitive personal data to us in your resume (such as government ID numbers, ethnicity, gender, religion, marital status or trade union membership) as we do not collect your sensitive personal data at this time.
          - paragraph [ref=e36]:
            - link "Privacy notice" [ref=e37] [cursor=pointer]:
              - /url: https://www.roberthalf.com/au/en/privacy
            - text: "|"
            - link "Terms of use" [ref=e38] [cursor=pointer]:
              - /url: https://www.roberthalf.com/au/en/terms
      - generic "Graph showing 1 of 8 steps complete" [ref=e41]
    - generic:
      - generic:
        - generic:
          - img
  - generic [ref=e45] [cursor=pointer]:
    - button "Cookies Settings" [ref=e47]
    - text: Cookies Settings
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
  10 | import path from "path";
  11 | import { webkit, chromium, firefox } from "playwright";
  12 | 
  13 | test("Single File Upload ", async () => {
  14 |   const browser: Browser = await chromium.launch({
  15 |     headless: false,
  16 |     channel: "chrome",
  17 |   });
  18 |   const page: Page = await browser.newPage();
  19 | 
  20 |   await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
  21 | 
  22 |   //single upload:
  23 |   await page
  24 |     .locator("input[name='upfile']")
  25 |     .setInputFiles("screenshots/homepage.png");
  26 |   await page.waitForTimeout(2000);
  27 | 
  28 |   //deselect files:
  29 |   await page.locator("input[name='upfile']").setInputFiles([]);
  30 |   await page.waitForTimeout(2000);
  31 | });
  32 | 
  33 | test("Single File Upload  from buffer memory", async () => {
  34 |   const browser: Browser = await chromium.launch({
  35 |     headless: false,
  36 |     channel: "chrome",
  37 |   });
  38 |   const page: Page = await browser.newPage();
  39 | 
  40 |   await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
  41 | 
  42 |   await page.locator("input[name='upfile']").setInputFiles({
  43 |     name: "shilpa_resume.txt",
  44 |     mimeType: "text/plain",
  45 |     buffer: Buffer.from("this is naveen resume"),
  46 |   });
  47 | 
  48 |   await page.waitForTimeout(2000);
  49 | });
  50 | 
  51 | test("Single File using file chooser ", async () => {
  52 |   const browser: Browser = await chromium.launch({
  53 |     headless: false,
  54 |     channel: "chrome",
  55 |   });
  56 |   const page: Page = await browser.newPage();
  57 | 
  58 |   await page.goto(
  59 |     "https://www.roberthalf.com/au/en/find-jobs/upload-resume/app",
  60 |   );
  61 |   await page.locator("//button[text()='Accept All Cookies']").click();
  62 | 
  63 |   const fileChooserPromise = page.waitForEvent("filechooser");
> 64 |   await page.getByLabel("Upload resume").first().click();
     |                                                  ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  65 | 
  66 |   const fileChooser = await fileChooserPromise;
  67 |   await fileChooser.setFiles(path.join(__dirname, "screenshots/homepage.png"));
  68 | });
  69 | 
```