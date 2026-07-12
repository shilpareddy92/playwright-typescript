# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/14_multiplefileupload.spec.ts >> Single File Upload 
- Location: tests/NaveenTests/14_multiplefileupload.spec.ts:13:5

# Error details

```
Error: ENOENT: no such file or directory, stat '/Users/naveenautomationlabs/Documents/FileToUpload/logo.png'
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - list [ref=e2]:
    - listitem [ref=e3]:
      - link "Home" [ref=e4] [cursor=pointer]:
        - /url: /
    - listitem [ref=e5]:
      - link "Main Content" [ref=e6] [cursor=pointer]:
        - /url: "#main"
  - banner [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]:
        - link "DWB" [ref=e10] [cursor=pointer]:
          - /url: /
          - text: DWB
          - generic [ref=e11]: 
        - text: 
      - generic [ref=e12]:
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link [ref=e15] [cursor=pointer]:
              - /url: /feed
              - generic [ref=e16]: 
          - listitem [ref=e17]:
            - link [ref=e18] [cursor=pointer]:
              - /url: //twitter.com/davidwalshblog
              - generic [ref=e19]: 
          - listitem [ref=e20]:
            - link [ref=e21] [cursor=pointer]:
              - /url: //facebook.com/davidwalshblog
              - generic [ref=e22]: 
          - listitem [ref=e23]:
            - link [ref=e24] [cursor=pointer]:
              - /url: //github.com/darkwing
              - generic [ref=e25]: 
          - listitem [ref=e26]:
            - link [ref=e27] [cursor=pointer]:
              - /url: //linkedin.com/in/davidjameswalsh
              - generic [ref=e28]: 
          - listitem: 
        - generic [ref=e31]:
          - generic [ref=e32]: Search
          - generic [ref=e33]: 
          - searchbox "Search" [ref=e34]
  - generic [ref=e36]:
    - strong [ref=e37]: "Popular:"
    - list [ref=e38]:
      - listitem [ref=e39]:
        - link "JavaScript Promises" [ref=e40] [cursor=pointer]:
          - /url: /promises
      - listitem [ref=e41]:
        - link "fetch API" [ref=e42] [cursor=pointer]:
          - /url: /fetch
      - listitem [ref=e43]:
        - link "React.js" [ref=e44] [cursor=pointer]:
          - /url: /tutorials/react
      - listitem [ref=e45]:
        - link "Cache API" [ref=e46] [cursor=pointer]:
          - /url: /cache
      - listitem [ref=e47]:
        - link "ES6 Features" [ref=e48] [cursor=pointer]:
          - /url: /es6-features
      - listitem [ref=e49]:
        - link "Node.js" [ref=e50] [cursor=pointer]:
          - /url: /tutorials/nodejs
      - listitem [ref=e51]:
        - link "JavaScript" [ref=e52] [cursor=pointer]:
          - /url: /tutorials/javascript
      - listitem [ref=e53]:
        - link "jQuery" [ref=e54] [cursor=pointer]:
          - /url: /tutorials/jquery
  - main [ref=e57]:
    - generic [ref=e58]:
      - 'heading "Demo: Multiple File Upload Input" [level=1] [ref=e59]'
      - generic [ref=e60]:
        - text: Read
        - link "Multiple File Upload Input" [ref=e61] [cursor=pointer]:
          - /url: https://davidwalsh.name/multiple-file-upload
      - generic [ref=e62]:
        - generic:
          - link:
            - /url: //twitter.com/share
        - iframe [ref=e64]:
          
      - paragraph [ref=e65]: Description...
      - paragraph [ref=e66]:
        - strong [ref=e67]: "Upload Files:"
        - button "Choose File" [ref=e68]
      - paragraph [ref=e69]:
        - strong [ref=e70]: "Files You Selected:"
      - list [ref=e71]:
        - listitem [ref=e72]: No Files Selected
    - paragraph [ref=e73]:
      - text: "Back to:"
      - link "Multiple File Upload Input" [ref=e74] [cursor=pointer]:
        - /url: https://davidwalsh.name/multiple-file-upload
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
  20 |   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  21 | 
  22 |   //multiple files:
> 23 |   await page
     |   ^ Error: ENOENT: no such file or directory, stat '/Users/naveenautomationlabs/Documents/FileToUpload/logo.png'
  24 |     .locator("input[name='filesToUpload']")
  25 |     .setInputFiles([
  26 |       path.join("/Users/naveenautomationlabs/Documents/FileToUpload/logo.png"),
  27 |       path.join(
  28 |         "/Users/naveenautomationlabs/Documents/FileToUpload/search.csv",
  29 |       ),
  30 |       path.join("/Users/naveenautomationlabs/Documents/FileToUpload/AWS.txt"),
  31 |     ]);
  32 | 
  33 |   await page.waitForTimeout(4000);
  34 | });
  35 | 
```