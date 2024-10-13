export const validateDepartureDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const departureDate = new Date(date);
  departureDate.setHours(0, 0, 0, 0);

  console.log("Validating Departure Date:", departureDate);
  console.log("Today's Date:", today);

  if (!departureDate || departureDate < today) {
    return "Departure date must be today or later.";
  }
  return null;
};

export const validateReturnDate = (departureDate, returnDate) => {
  const depDate = new Date(departureDate);
  depDate.setHours(0, 0, 0, 0); // Reset departure date time to midnight

  const retDate = new Date(returnDate);
  retDate.setHours(0, 0, 0, 0); // Reset return date time to midnight

  console.log("Validating Return Date:", retDate);
  console.log("Departure Date for Validation:", depDate);

  if (!retDate || retDate < depDate) {
    return "Return date must be on or after departure date.";
  }
  return null;
};
