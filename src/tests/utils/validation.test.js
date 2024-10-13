import {
  validateDepartureDate,
  validateReturnDate,
} from "../../  utils/validation";

describe("validateDepartureDate", () => {
  it("should return an error if the departure date is in the past", () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1); // Set the date to yesterday

    const result = validateDepartureDate(pastDate);
    expect(result).toBe("Departure date must be today or later.");
  });

  it("should return null if the departure date is today or in the future", () => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Set the date to tomorrow

    expect(validateDepartureDate(today)).toBeNull();
    expect(validateDepartureDate(futureDate)).toBeNull();
  });
});

describe("validateReturnDate", () => {
  it("should return an error if the return date is before the departure date", () => {
    const departureDate = new Date();
    const returnDate = new Date();
    returnDate.setDate(departureDate.getDate() - 1); // Set return date to before departure

    const result = validateReturnDate(departureDate, returnDate);
    expect(result).toBe("Return date must be on or after departure date.");
  });

  it("should return null if the return date is on or after the departure date", () => {
    const departureDate = new Date();
    const validReturnDate = new Date();
    validReturnDate.setDate(departureDate.getDate() + 1); // Set return date to after departure

    expect(validateReturnDate(departureDate, validReturnDate)).toBeNull();
  });
});
