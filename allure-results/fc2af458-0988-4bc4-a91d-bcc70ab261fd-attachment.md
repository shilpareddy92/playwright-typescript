# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/10_Mock_API_Response.spec.ts >> Mock API response in playwright
- Location: tests/Chapter06/10_Mock_API_Response.spec.ts:2:5

# Error details

```
Error: Route is already handled!
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('playwright by testers talk')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 120000ms
  - waiting for getByText('playwright by testers talk')

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
- text: Loading...
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | test("Mock API response in playwright", async ({ page }) => {
  3  |   // Mock the api call before navigating
  4  |   await page.route("*/**/api/v1/fruits", async (route) => {
  5  |     const response = await route.fetch();
  6  |     const json = await response.json();
  7  |     json.push({ name: "playwright by testers talk", id: 100 });
  8  |     json.push({ name: "cypress by testers talk", id: 101 });
  9  |     json.push({ name: "api testing by testers talk", id: 102 });
  10 |     json.push({ name: "postman by testers talk", id: 103 });
  11 |     json.push({ name: "rest assured by testers talk", id: 104 });
  12 |     await route.fulfill({ json });
  13 |     // Fulfill using the original response, while patching the response body
  14 |     // with the given JSON object.
  15 |     await route.fulfill({ response, json });
  16 |   });
  17 | 
  18 |   // Go to URL
  19 |   await page.goto("https://demo.playwright.dev/api-mocking/");
  20 | 
  21 |   // Assert that the new fruit is visible
> 22 |     await expect(page.getByText('playwright by testers talk')).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  23 |     await expect(page.getByText('cypress by testers talk')).toBeVisible();
  24 |     await expect(page.getByText('api testing by testers talk')).toBeVisible();
  25 |     await expect(page.getByText('postman by testers talk')).toBeVisible();
  26 |     await expect(page.getByText('rest assured by testers talk')).toBeVisible();
  27 | });
  28 | 
```