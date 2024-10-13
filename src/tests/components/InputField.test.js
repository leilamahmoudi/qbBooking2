import { render, screen } from "@testing-library/react";
import InputField from "../../  components/InputField";

test("renders InputField with options", () => {
  const options = [
    { value: "one-way", label: "One-Way" },
    { value: "two-way", label: "Two-Way" },
  ];

  render(
    <InputField
      label="Trip Type"
      value="one-way"
      onChange={() => {}}
      options={options}
      id="trip-type"
    />
  );

  // Check if the label is rendered
  expect(screen.getByText(/Trip Type/i)).toBeInTheDocument();

  // Check if the select input is rendered
  expect(screen.getByRole("combobox")).toBeInTheDocument();

  // Check if the options are rendered
  expect(screen.getByText(/One-Way/i)).toBeInTheDocument();
  expect(screen.getByText(/Two-Way/i)).toBeInTheDocument();
});
