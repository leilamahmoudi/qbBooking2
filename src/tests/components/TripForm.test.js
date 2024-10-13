import { render, screen } from "@testing-library/react";
import TripForm from "../../  components/TripForm";

test("renders TripForm", () => {
  render(<TripForm />);

  // Check if the "Trip Type" select dropdown is rendered
  expect(
    screen.getByRole("combobox", { name: /Trip Type/i })
  ).toBeInTheDocument();

  // Check if the "Departure Date" datepicker input is rendered by using placeholder text
  expect(screen.getByPlaceholderText(/Select a date/i)).toBeInTheDocument();

  // Check if the submit button is rendered
  expect(
    screen.getByRole("button", { name: /Book Trip/i })
  ).toBeInTheDocument();
});
