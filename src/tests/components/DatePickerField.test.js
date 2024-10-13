import { render, screen } from "@testing-library/react";
import DatePickerField from "../../  components/DatePickerField";

test("renders DatePickerField with label", () => {
  render(
    <DatePickerField
      label="Departure Date"
      selectedDate={null}
      onDateChange={() => {}}
    />
  );

  // Check if the label is rendered
  expect(screen.getByText(/Departure Date/i)).toBeInTheDocument();

  // Check if the date input is rendered
  expect(screen.getByPlaceholderText(/Select a date/i)).toBeInTheDocument();
});
