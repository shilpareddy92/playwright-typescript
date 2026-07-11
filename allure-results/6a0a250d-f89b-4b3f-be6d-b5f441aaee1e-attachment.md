# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06/07_PATCH_API_Request.spec.ts >> Create PATCH API Request using playwright & typescript
- Location: tests/Chapter06/07_PATCH_API_Request.spec.ts:18:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  18  | test("Create PATCH API Request using playwright & typescript", async ({
  19  |   request,
  20  | }) => {
  21  |   // Reading json file
  22  |   const checkInDate = faker.date.recent().toISOString().split("T")[0];
  23  |   const checkOutDate = faker.date.future().toISOString().split("T")[0];
  24  |   const firstName = faker.person.firstName();
  25  |   const lastName = faker.person.lastName();
  26  |   const totalPrice = faker.number.int({ min: 1000, max: 10000 });
  27  |   const additionalNeeds = faker.helpers.arrayElement([
  28  |     "Breakfast",
  29  |     "Lunch",
  30  |     "Dinner",
  31  |     "Extra Bed",
  32  |     "Airport Pickup",
  33  |     "Late Checkout",
  34  |   ]);
  35  | 
  36  |   // Updating POST API request body
  37  |   const postAPIRequest = await getPOSTAPIRequestBody(
  38  |     firstName,
  39  |     lastName,
  40  |     totalPrice,
  41  |     true,
  42  |     additionalNeeds,
  43  |     checkInDate,
  44  |     checkOutDate,
  45  |   );
  46  | 
  47  |   // Create POST API Request
  48  |   const postAPIResponse = await request.post(`/booking`, {
  49  |     data: postAPIRequest,
  50  |   });
  51  | 
  52  |   // Print JSON API response
  53  |   const jsonPOSTAPIResponse = await postAPIResponse.json();
  54  |   console.log(
  55  |     "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  56  |   );
  57  |   // Validating api response
  58  |   expect(postAPIResponse.status()).toBe(200);
  59  |   expect(postAPIResponse.statusText()).toBe("OK");
  60  |   expect(postAPIResponse.headers()["content-type"]).toContain(
  61  |     "application/json",
  62  |   );
  63  | 
  64  |   // Validate propert/key names
  65  |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  66  |   expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");
  67  | 
  68  |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  69  |   expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");
  70  | 
  71  |   // Validate API response body
  72  |   expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
  73  |   expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);
  74  |   expect(jsonPOSTAPIResponse.booking.totalprice).toBe(totalPrice);
  75  |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(checkInDate);
  76  |   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(checkOutDate);
  77  |   expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(additionalNeeds);
  78  | 
  79  |   // Create GET API request
  80  |   const bookingId = jsonPOSTAPIResponse.bookingid;
  81  |   console.log("Booking Id : " + bookingId);
  82  | 
  83  |   const getAPIResponse = await request.get(`/booking/${bookingId}`);
  84  | 
  85  |   // Validate status code, status text
  86  |   expect(getAPIResponse.status()).toBe(200);
  87  |   expect(getAPIResponse.statusText()).toBe("OK");
  88  | 
  89  |   // Print GET API response
  90  |   const getAPIJSONResponse = await getAPIResponse.json();
  91  |   console.log(
  92  |     "GET API Response : " + JSON.stringify(getAPIJSONResponse, null, 2),
  93  |   );
  94  | 
  95  |   // Generate token
  96  |   const tokenAPIResponse = await request.post(`/auth`, {
  97  |     data: tokenAPIRequest,
  98  |   });
  99  |   // Validate status code, status text
  100 |   expect(tokenAPIResponse.status()).toBe(200);
  101 |   expect(tokenAPIResponse.statusText()).toBe("OK");
  102 | 
  103 |   //get the token from token response
  104 |   const tokenAPIJSONResponse = await tokenAPIResponse.json();
  105 |   const token = tokenAPIJSONResponse.token;
  106 |   console.log("Token : " + token);
  107 | 
  108 |   // Create Post API Request
  109 |   const patchAPIRespsonse = await request.put(`/booking/${bookingId}`, {
  110 |     headers: {
  111 |       "Content-Type": "application/json",
  112 |       Cookie: `token=${token}`,
  113 |     },
  114 |     data: patchAPIRequest,
  115 |   });
  116 | 
  117 |   // Validate status code, status text
> 118 |   expect(patchAPIRespsonse.status()).toBe(200);
      |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  119 |   expect(patchAPIRespsonse.statusText()).toBe("OK");
  120 | 
  121 |   // Print GET API response
  122 |   const putAPIJSONResponse = await patchAPIRespsonse.json();
  123 |   console.log(
  124 |     "PUT API Response : " + JSON.stringify(putAPIJSONResponse, null, 2),
  125 |   );
  126 | });
  127 | 
```