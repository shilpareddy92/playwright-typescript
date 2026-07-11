# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/11_Mock_From_HAR_File.spec.ts >> Mock API from HAR file in playwright
- Location: tests/Chapter06/11_Mock_From_HAR_File.spec.ts:4:5

# Error details

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
- list:
  - listitem: Strawberry
  - listitem: Banana
  - listitem: Tomato
  - listitem: Pear
  - listitem: Blackberry
  - listitem: Kiwi
  - listitem: Pineapple
  - listitem: Passionfruit
  - listitem: Orange
  - listitem: Raspberry
  - listitem: Watermelon
  - listitem: Lemon
  - listitem: Mango
  - listitem: Blueberry
  - listitem: Apple
  - listitem: Melon
  - listitem: Lime
```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from "@playwright/test";
  3  | 
  4  | test('Mock API from HAR file in playwright', async ({ page }) => {
  5  | 
  6  |     // Recording a HAR file
  7  |     await page.routeFromHAR('./har/fruits.har', {
  8  |         url: '*/**/api/v1/fruits',
  9  |         update: true
  10 |     })
  11 | 
  12 |     // Go to URL
  13 |     await page.goto('https://demo.playwright.dev/api-mocking/');
  14 | 
  15 |     // Assert that the new fruit is visible
> 16 |     await expect(page.getByText('playwright by testers talk')).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  17 |     await expect(page.getByText('cypress by testers talk')).toBeVisible();
  18 |     await expect(page.getByText('api testing by testers talk')).toBeVisible();
  19 |     await expect(page.getByText('postman by testers talk')).toBeVisible();
  20 |     await expect(page.getByText('rest assured by testers talk')).toBeVisible();
  21 | });
```