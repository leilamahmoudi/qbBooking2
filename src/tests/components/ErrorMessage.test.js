import { render, screen } from "@testing-library/react";
import ErrorMessage from "../../  components/ErrorMessage";

test("renders error message", () => {
  render(<ErrorMessage message="This is an error" />);

  // Check if the error message is rendered
  expect(screen.getByText(/This is an error/i)).toBeInTheDocument();
});
