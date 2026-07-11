# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/09_Mock_API_Request.spec.ts >> Mock API request in playwright
- Location: tests/Chapter06/09_Mock_API_Request.spec.ts:2:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('playwright typescript by testers talk')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 120000ms
  - waiting for getByText('playwright typescript by testers talk')

```

```yaml
- heading "Render a List of Fruits" [level=1]
- paragraph: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
- paragraph:
  - link "Check out the tests for this repo":
    - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
- paragraph:
  - link "Learn more on API mocking in Playwright":
    - /url: https://playwright.dev/docs/mock
- list:
  - listitem: playwright by testers talk
  - listitem: cypress by testers talk
  - listitem: api testing by testers talk
  - listitem: postman by testers talk
  - listitem: rest assured by testers talk
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | test("Mock API request in playwright", async ({ page }) => {
  3  |   // Mock the api call before navigating
  4  |   await page.route("*/**/api/v1/fruits", async (route) => {
  5  |     const json = [
  6  |       { name: "playwright by testers talk", id: 21 },
  7  |       { name: "cypress by testers talk", id: 71 },
  8  |       { name: "api testing by testers talk", id: 72 },
  9  |       { name: "postman by testers talk", id: 73 },
  10 |       { name: "rest assured by testers talk", id: 74 },
  11 |     ];
  12 |     await route.fulfill({ json });
  13 |   });
  14 | 
  15 |   // Go to URL
  16 |   await page.goto("https://demo.playwright.dev/api-mocking/");
  17 |   // Validate text
  18 |   await expect(
  19 |     page.getByText("playwright typescript by testers talk"),
> 20 |   ).toBeVisible();
     |     ^ Error: expect(locator).toBeVisible() failed
  21 |   await expect(
  22 |     page.getByText("playwright javascript by testers talk"),
  23 |   ).toBeVisible();
  24 |   await expect(page.getByText("cypress by testers talk")).toBeVisible();
  25 |   await expect(page.getByText("api testing by testers talk")).toBeVisible();
  26 | 
  27 |   // Assert that the mocked values
  28 |   await expect(page.getByText("playwright by testers talk")).toBeVisible();
  29 |   await expect(page.getByText("cypress by testers talk")).toBeVisible();
  30 |   await expect(page.getByText("api testing by testers talk")).toBeVisible();
  31 |   await expect(page.getByText("postman by testers talk")).toBeVisible();
  32 |   await expect(page.getByText("rest assured by testers talk")).toBeVisible();
  33 | });
  34 | 
```