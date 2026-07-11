// Import playwright module
import { test, expect } from "@playwright/test";

import { formatAPIRequest } from "../../src/utils/APIHelper";
import path from "path";
import fs from "fs";

// to create Dynamic Post API request using PW adnTS
//pligin npm install @faker-js/faker

//import this
import { faker } from "@faker-js/faker";
test.use({
  baseURL: process.env.BASE_API_URL,
});

test("Create POST API Request using dynamic api request body in playwright & typescript", async ({
  request,
}) => {
  // Reading json file
  const filePath = path.join(
    __dirname,
    "../../test-data/api_requests/Dynamic_POST_API_Request.json",
  );
  const jsonTempalte = fs.readFileSync(filePath, "utf-8");
  const checkInDate = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkOutDate = tomorrow.toISOString().split("T")[0];
  const values = [
    "cypress by testers talk",
    "javascript by testers talk",
    2000,
    checkInDate,
    checkOutDate,
    "compliementary breakfast",
  ];
  // Updating POST API request body
  const postAPIRequest = await formatAPIRequest(jsonTempalte, values);

  // Create POST API Request
  const postAPIResponse = await request.post(`/booking`, {
    data: JSON.parse(postAPIRequest),
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
  expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  expect(jsonPOSTAPIResponse.booking.firstname).toBe(values[0]);
  expect(jsonPOSTAPIResponse.booking.lastname).toBe(values[1]);
  expect(jsonPOSTAPIResponse.booking.totalprice).toBe(Number(values[2]));
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(values[3]);
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(values[4]);
  expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(values[5]);
});

test("Create POST Faker API Request using dynamic api request body in playwright & typescript ", async ({
  request,
}) => {
  // Reading json file
  const filePath = path.join(
    __dirname,
    "../../test-data/api_requests/Dynamic_POST_API_Request.json",
  );
  const jsonTempalte = fs.readFileSync(filePath, "utf-8");
  const checkInDate = faker.date.recent().toISOString().split("T")[0];
  const checkOutDate = faker.date.future().toISOString().split("T")[0];
  const firstName =faker.person.firstName();
  const lastName =faker.person.lastName();
  const totalPrice = faker.number.int({ min: 1000, max: 10000 });

  const additionalNeeds = faker.helpers.arrayElement([
    "Breakfast",
    "Lunch",
    "Dinner",
    "Extra Bed",
    "Airport Pickup",
    "Late Checkout",
  ]);
  const values = [
    firstName,lastName,totalPrice,checkInDate,checkOutDate,additionalNeeds
  ];
  // Updating POST API request body
  const postAPIRequest = await formatAPIRequest(jsonTempalte, values);

  // Create POST API Request
  const postAPIResponse = await request.post(`/booking`, {
    data: JSON.parse(postAPIRequest),
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
  expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  expect(jsonPOSTAPIResponse.booking.firstname).toBe(values[0]);
  expect(jsonPOSTAPIResponse.booking.lastname).toBe(values[1]);
  expect(jsonPOSTAPIResponse.booking.totalprice).toBe(Number(values[2]));
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe(values[3]);
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe(values[4]);
  expect(jsonPOSTAPIResponse.booking.additionalneeds).toBe(values[5]);
});





