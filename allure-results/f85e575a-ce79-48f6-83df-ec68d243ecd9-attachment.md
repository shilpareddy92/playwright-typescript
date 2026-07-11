# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/01_POST_API_Request_Static.spec.ts >> Create POST API Request using static file in playwright & typescript
- Location: tests/Chapter06/01_POST_API_Request_Static.spec.ts:9:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | import postAPIRequest from "../../test-data/api_requests/POST_API_Request.json";
  4  | 
  5  | test.use({
  6  |   baseURL: process.env.BASE_API_URL,
  7  | });
  8  | 
  9  | test("Create POST API Request using static file in playwright & typescript", async ({
  10 |   request,
  11 | }) => {
  12 |   // Create POST API Request
  13 |   const postAPIResponse = await request.post(`/booking`, {
  14 |     data: postAPIRequest,
  15 |   });
  16 | 
  17 |   // Print JSON API response
  18 |   const jsonPOSTAPIResponse = await postAPIResponse.json();
  19 |   console.log(
  20 |     "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  21 |   );
  22 | 
  23 |   // Validating api response
> 24 |     expect(postAPIResponse.status()).toBe(201);
     |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  25 |     expect(postAPIResponse.statusText()).toBe('OK');
  26 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  27 | 
  28 | });
  29 | 
```