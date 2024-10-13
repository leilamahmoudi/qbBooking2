import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders book your trip title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Book Your Trip!/i);
  expect(titleElement).toBeInTheDocument();
});
