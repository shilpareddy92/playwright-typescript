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

Expected: "compliementary breakfast"
Received: "{5}"
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
  22 |   const today = new Date();
  23 | console.log(today);
  24 |   const values = [
  25 |     "cypress by testers talk",
  26 |     "javascript by testers talk",
  27 |     2000,
  28 |     "compliementary breakfast",
  29 |   ];
  30 |   // Updating POST API request body
  31 |   const postAPIRequest = await formatAPIRequest(jsonTempalte, values);
  32 | 
  33 |   // Create POST API Request
  34 |   const postAPIResponse = await request.post(`/booking`, {
  35 |     data: JSON.parse(postAPIRequest),
  36 |   });
  37 | 
  38 |   // Print JSON API response
  39 |   const jsonPOSTAPIResponse = await postAPIResponse.json();
  40 |   console.log(
  41 |     "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  42 |   );
  43 |   // Validating api response
  44 |   expect(postAPIResponse.status()).toBe(200);
  45 |   expect(postAPIResponse.statusText()).toBe("OK");
  46 |   expect(postAPIResponse.headers()["content-type"]).toContain(
  47 |     "application/json",
  48 |   );
  49 | 
  50 |   // Validate propert/key names
  51 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  52 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");
  53 | 
  54 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  55 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");
  56 | 
  57 |   // Validate API response body
  58 |   expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  59 |   expect(jsonPOSTAPIResponse.booking.firstname).toBe(values[0]);
  60 |   expect(jsonPOSTAPIResponse.booking.lastname).toBe(values[1]);
  61 |   expect(jsonPOSTAPIResponse.booking.totalprice).toBe(Number(values[2]));
> 62 |   expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(values[3]);
     |                                                       ^ Error: expect(received).toBe(expected) // Object.is equality
  63 | 
  64 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(values[4]);
  65 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(values[5]);
  66 | });
  67 | 
```