# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/02_POST_API_Request_Dynamic.spec.ts >> Create POST API Request using dynamic api request body in playwright & typescript
- Location: tests/Chapter06/02_POST_API_Request_Dynamic.spec.ts:12:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "2025-01-15"
Received: "2018-01-01"
```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from "@playwright/test";
  3  | 
  4  | import { formatAPIRequest } from "../../src/utils/APIHelper";
  5  | import path from "path";
  6  | import fs from "fs";
  7  | 
  8  | test.use({
  9  |   baseURL: process.env.BASE_API_URL,
  10 | });
  11 | 
  12 | test("Create POST API Request using dynamic api request body in playwright & typescript", async ({
  13 |   request,
  14 | }) => {
  15 |   // Reading json file
  16 |   const filePath = path.join(
  17 |     __dirname,
  18 |     "../../test-data/api_requests/Dynamic_POST_API_Request.json",
  19 |   );
  20 |   const jsonTempalte = fs.readFileSync(filePath, "utf-8");
  21 | 
  22 |   const values = [
  23 |     "cypress by testers talk",
  24 |     "javascript by testers talk",
  25 |     "2000",
  26 |     "compliementary breakfast",
  27 |   ];
  28 |   // Updating POST API request body
  29 |   const postAPIRequest = await formatAPIRequest(jsonTempalte, values);
  30 | 
  31 |   // Create POST API Request
  32 |   const postAPIResponse = await request.post(`/booking`, {
  33 |     data: JSON.parse(postAPIRequest),
  34 |   });
  35 | 
  36 |   // Print JSON API response
  37 |   const jsonPOSTAPIResponse = await postAPIResponse.json();
  38 |   console.log(
  39 |     "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  40 |   );
  41 |   // Validating api response
  42 |   expect(postAPIResponse.status()).toBe(200);
  43 |   expect(postAPIResponse.statusText()).toBe("OK");
  44 |   expect(postAPIResponse.headers()["content-type"]).toContain(
  45 |     "application/json",
  46 |   );
  47 | 
  48 |   // Validate propert/key names
  49 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  50 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");
  51 | 
  52 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  53 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");
  54 | 
  55 |   // Validate API response body
  56 |   expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  57 |   expect(jsonPOSTAPIResponse.booking.firstname).toBe(values[0]);
  58 |   expect(jsonPOSTAPIResponse.booking.lastname).toBe(values[1]);
  59 |   expect(jsonPOSTAPIResponse.booking.totalprice).toBe(Number(values[2]));
  60 |   expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(values[3]);
  61 | 
> 62 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe("2025-01-15");
     |                                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  63 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe("2025-01-17");
  64 | });
  65 | 
```