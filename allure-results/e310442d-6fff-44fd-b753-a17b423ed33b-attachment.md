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
Received: "0NaN-aN-aN"
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
  21 |   const checkInDate = new Date().toISOString().split("T")[0];
  22 |   const tomorrow = new Date();
  23 |   tomorrow.setDate(tomorrow.getDate() + 1);
  24 |   const checkOutDate = tomorrow.toISOString().split("T")[0];
  25 |   const values = [
  26 |     "cypress by testers talk",
  27 |     "javascript by testers talk",
  28 |     2000,
  29 |     "compliementary breakfast",
  30 |     checkInDate,
  31 |     checkOutDate,
  32 |   ];
  33 |   // Updating POST API request body
  34 |   const postAPIRequest = await formatAPIRequest(jsonTempalte, values);
  35 | 
  36 |   // Create POST API Request
  37 |   const postAPIResponse = await request.post(`/booking`, {
  38 |     data: JSON.parse(postAPIRequest),
  39 |   });
  40 | 
  41 |   // Print JSON API response
  42 |   const jsonPOSTAPIResponse = await postAPIResponse.json();
  43 |   console.log(
  44 |     "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  45 |   );
  46 |   // Validating api response
  47 |   expect(postAPIResponse.status()).toBe(200);
  48 |   expect(postAPIResponse.statusText()).toBe("OK");
  49 |   expect(postAPIResponse.headers()["content-type"]).toContain(
  50 |     "application/json",
  51 |   );
  52 | 
  53 |   // Validate propert/key names
  54 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  55 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");
  56 | 
  57 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  58 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");
  59 | 
  60 |   // Validate API response body
  61 |   expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  62 |   expect(jsonPOSTAPIResponse.booking.firstname).toBe(values[0]);
  63 |   expect(jsonPOSTAPIResponse.booking.lastname).toBe(values[1]);
  64 |   expect(jsonPOSTAPIResponse.booking.totalprice).toBe(Number(values[2]));
> 65 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(values[3]);
     |                                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  66 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(values[4]);
  67 |   expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(values[5]);
  68 | });
  69 | 
```