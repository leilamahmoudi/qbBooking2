import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "./ErrorMessage";

const DatePickerField = ({
  label,
  selectedDate,
  onDateChange,
  minDate,
  error,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        minDate={minDate || new Date()}
        className={`mt-1 block w-full p-3 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:ring focus:ring-blue-300 focus:outline-none transition duration-150 ease-in-out`}
        dateFormat="yyyy/MM/dd"
        placeholderText="Select a date"
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default DatePickerField;
