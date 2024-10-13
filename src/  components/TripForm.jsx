import React, { useState, useEffect } from "react";
import DatePickerField from "./DatePickerField";
import InputField from "./InputField";
import {
  validateDepartureDate,
  validateReturnDate,
} from "../  utils/validation";

const TripForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const departureParam = params.get("departure");
    const returnParam = params.get("return");

    if (departureParam) {
      const date = new Date(departureParam);
      const errorMessage = validateDepartureDate(date);

      setDepartureDate(date);
      if (errorMessage) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          departureDate: errorMessage,
        }));
      }
    }

    if (returnParam) {
      const returnDateValue = new Date(returnParam);
      setReturnDate(returnDateValue);

      if (departureDate) {
        const returnError = validateReturnDate(departureDate, returnDateValue);
        if (returnError) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            returnDate: returnError,
          }));
        }
      }

      setTripType("two-way");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = {};

    const departureError = validateDepartureDate(departureDate);
    const returnError =
      tripType === "two-way"
        ? validateReturnDate(departureDate, returnDate)
        : null;

    if (departureError) currentErrors.departureDate = departureError;
    if (returnError) currentErrors.returnDate = returnError;

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      const formattedDepartureDate = departureDate.toISOString().split("T")[0];
      const formattedReturnDate = returnDate
        ? returnDate.toISOString().split("T")[0]
        : "N/A";
      alert(
        `Departure: ${formattedDepartureDate}, Return: ${formattedReturnDate}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        id="trip-type"
        label="Trip Type"
        value={tripType}
        onChange={(e) => {
          setTripType(e.target.value);
          setReturnDate(null);
        }}
        options={[
          { value: "one-way", label: "One-Way" },
          { value: "two-way", label: "Two-Way" },
        ]}
      />

      <DatePickerField
        label="Departure Date"
        selectedDate={departureDate}
        onDateChange={(date) => {
          setDepartureDate(date);
          setErrors((prevErrors) => ({
            ...prevErrors,
            departureDate: validateDepartureDate(date) || null,
          }));
        }}
        error={errors.departureDate}
      />

      {tripType === "two-way" && (
        <DatePickerField
          label="Return Date"
          selectedDate={returnDate}
          onDateChange={(date) => {
            setReturnDate(date);
            setErrors((prevErrors) => ({
              ...prevErrors,
              returnDate: validateReturnDate(departureDate, date) || null,
            }));
          }}
          minDate={departureDate || new Date()}
          error={errors.returnDate}
        />
      )}

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
      >
        Book Trip
      </button>
    </form>
  );
};

export default TripForm;
