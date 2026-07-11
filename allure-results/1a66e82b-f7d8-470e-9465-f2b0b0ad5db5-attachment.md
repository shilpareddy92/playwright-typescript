# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/03_Dynamic_TypeSafety_POST_API_Request.spec.ts >> Create TypeSafety POST API Request using dynamic api request body in playwright & typescript
- Location: tests/Chapter06/03_Dynamic_TypeSafety_POST_API_Request.spec.ts:10:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | import {
  4  |   formatAPIRequest,
  5  |   getPOSTAPIRequestBody,
  6  | } from "../../src/utils/APIHelper";
  7  | 
  8  | import { faker } from "@faker-js/faker";
  9  | 
  10 | test("Create TypeSafety POST API Request using dynamic api request body in playwright & typescript", async ({
  11 |   request,
  12 | }) => {
  13 |   const checkInDate = faker.date.recent().toISOString().split("T")[0];
  14 |   const checkOutDate = faker.date.future().toISOString().split("T")[0];
  15 |   const firstName = faker.person.firstName();
  16 |   const lastName = faker.person.lastName();
  17 |   const totalPrice = faker.number.int({ min: 1000, max: 10000 });
  18 |   const additionalNeeds = faker.helpers.arrayElement([
  19 |     "Breakfast",
  20 |     "Lunch",
  21 |     "Dinner",
  22 |     "Extra Bed",
  23 |     "Airport Pickup",
  24 |     "Late Checkout",
  25 |   ]);
  26 | 
  27 |   // Updating POST API request body
  28 |   const postAPIRequest = await getPOSTAPIRequestBody(
  29 |     firstName,
  30 |     lastName,
  31 |     totalPrice,
  32 |     true,
  33 |     additionalNeeds,
  34 |     checkInDate,
  35 |     checkOutDate,
  36 |   );
  37 | 
  38 |   // Create POST API Request
> 39 |   const postAPIResponse = await request.post(`/booking`, {
     |                                         ^ TypeError: apiRequestContext.post: Invalid URL
  40 |     data: postAPIRequest,
  41 |   });
  42 | 
  43 |   // Print JSON API response
  44 |   const jsonPOSTAPIResponse = await postAPIResponse.json();
  45 |   console.log(
  46 |     "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  47 |   );
  48 |   // Validating api response
  49 |   expect(postAPIResponse.status()).toBe(200);
  50 |   expect(postAPIResponse.statusText()).toBe("OK");
  51 |   expect(postAPIResponse.headers()["content-type"]).toContain(
  52 |     "application/json",
  53 |   );
  54 | 
  55 |   // Validate propert/key names
  56 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  57 |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");
  58 | 
  59 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  60 |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");
  61 | 
  62 |   // Validate API response body
  63 |   expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
  64 |   expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);
  65 |   expect(jsonPOSTAPIResponse.booking.totalprice).toBe(totalPrice);
  66 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(checkInDate);
  67 |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(checkOutDate);
  68 |   expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(additionalNeeds);
  69 | });
  70 | 
```