interface BookingAPI {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  additionalneeds: string;
  bookingdates:bookingdates;
}

interface bookingdates {
  checkin: string;
  checkout: string;
}
