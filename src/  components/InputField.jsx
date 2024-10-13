import React from "react";

const InputField = ({ label, value, onChange, options, id }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none transition duration-150 ease-in-out"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputField;
