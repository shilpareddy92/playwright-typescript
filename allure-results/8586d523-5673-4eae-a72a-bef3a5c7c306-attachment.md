# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/11_Mock_From_HAR_File.spec.ts >> Mock API from HAR file in playwright
- Location: tests/Chapter06/11_Mock_From_HAR_File.spec.ts:4:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Render a List of Fruits" [level=1] [ref=e3]
  - paragraph [ref=e4]: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
  - paragraph [ref=e5]:
    - link "Check out the tests for this repo" [ref=e6] [cursor=pointer]:
      - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
  - paragraph [ref=e7]:
    - link "Learn more on API mocking in Playwright" [ref=e8] [cursor=pointer]:
      - /url: https://playwright.dev/docs/mock
  - list [ref=e12]:
    - listitem [ref=e13]: Strawberry
    - listitem [ref=e14]: Banana
    - listitem [ref=e15]: Tomato
    - listitem [ref=e16]: Pear
    - listitem [ref=e17]: Blackberry
    - listitem [ref=e18]: Kiwi
    - listitem [ref=e19]: Pineapple
    - listitem [ref=e20]: Passionfruit
    - listitem [ref=e21]: Orange
    - listitem [ref=e22]: Raspberry
    - listitem [ref=e23]: Watermelon
    - listitem [ref=e24]: Lemon
    - listitem [ref=e25]: Mango
    - listitem [ref=e26]: Blueberry
    - listitem [ref=e27]: Apple
    - listitem [ref=e28]: Melon
    - listitem [ref=e29]: Lime
```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from "@playwright/test";
  3  | 
  4  | test("Mock API from HAR file in playwright", async ({ page }) => {
  5  |   // Recording a HAR file
  6  |   await page.routeFromHAR("./har/fruits.har", {
  7  |     url: "*/**/api/v1/fruits",
  8  |     update: true,
  9  |   });
  10 | 
  11 |   // Go to the page
  12 |   await page.goto("https://demo.playwright.dev/api-mocking");
  13 | 
  14 |   // Assert that the fruit is visible
  15 |   await expect(page.getByText("Strawberry")).toBeVisible();
  16 | 
> 17 |   test('Record the HAR file', async ({ page }) => {
     |       ^ Error: Playwright Test did not expect test() to be called here.
  18 |     
  19 |     // Get the response from the HAR file
  20 |     await page.routeFromHAR('./hars/fruit.har', {
  21 |         url: '*/**/api/v1/fruits',
  22 |         update: true,
  23 |     });
  24 | 
  25 |     // Go to the page
  26 |     await page.goto('https://demo.playwright.dev/api-mocking');
  27 | 
  28 |     // Assert that the fruit is visible
  29 |     await expect(page.getByText('Strawberry')).toBeVisible();
  30 | });
  31 | });
  32 | 
```