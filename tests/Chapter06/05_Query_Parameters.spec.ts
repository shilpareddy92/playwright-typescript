// Import playwright module
import { test, expect } from "@playwright/test";

import {
  formatAPIRequest,
  getPOSTAPIRequestBody,
} from "../../src/utils/APIHelper";

// to create Dynamic Post API request using PW adnTS
//pligin npm install @faker-js/faker
//import this
import { faker } from "@faker-js/faker";
test.use({
  baseURL: process.env.BASE_API_URL,
});

test("Create GET API Request using query parameters inplaywright & typescript", async ({
  request,
}) => {
  // Reading json file
  const checkInDate = faker.date.recent().toISOString().split("T")[0];
  const checkOutDate = faker.date.future().toISOString().split("T")[0];
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const totalPrice = faker.number.int({ min: 1000, max: 10000 });
  const additionalNeeds = faker.helpers.arrayElement([
    "Breakfast",
    "Lunch",
    "Dinner",
    "Extra Bed",
    "Airport Pickup",
    "Late Checkout",
  ]);

  // Updating POST API request body
  const postAPIRequest = await getPOSTAPIRequestBody(
    firstName,
    lastName,
    totalPrice,
    true,
    additionalNeeds,
    checkInDate,
    checkOutDate,
  );

  // Create POST API Request
  const postAPIResponse = await request.post(`/booking`, {
    data: postAPIRequest,
  });

  // Print JSON API response
  const jsonPOSTAPIResponse = await postAPIResponse.json();
  console.log(
    "POST API Response : " + JSON.stringify(jsonPOSTAPIResponse, null, 2),
  );
  // Validating api response
  expect(postAPIResponse.status()).toBe(200);
  expect(postAPIResponse.statusText()).toBe("OK");
  expect(postAPIResponse.headers()["content-type"]).toContain(
    "application/json",
  );

  // Validate propert/key names
  expect(jsonPOSTAPIResponse.booking).toHaveProperty("firstname");
  expect(jsonPOSTAPIResponse.booking).toHaveProperty("lastname");

  expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkin");
  expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty("checkout");

  // Validate API response body
  expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
  expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);
  expect(jsonPOSTAPIResponse.booking.totalprice).toBe(totalPrice);
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(checkInDate);
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(checkOutDate);
  expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(additionalNeeds);

  // Create GET API request
  const bookingId = jsonPOSTAPIResponse.bookingid;
  console.log("Booking Id : " + bookingId);

  const getAPIResponse = await request.get(`/booking/`, {
    params: {
      firstname: firstName,
      lastname: lastName,
    },
  });

  // Validate status code, status text
  expect(getAPIResponse.status()).toBe(200);
  expect(getAPIResponse.statusText()).toBe("OK");

  // Print GET API response
  const getAPIJSONResponse = await getAPIResponse.json();
  console.log(
    "GET API Response : " + JSON.stringify(getAPIJSONResponse, null, 2),
  );
});
