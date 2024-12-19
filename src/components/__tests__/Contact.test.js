import { render, screen, cleanup } from "@testing-library/react";
import Contact from "../Contact";

afterEach(() => {
  cleanup();
});

test("should load contact component", () => {
  render(<Contact />);

  const heading = screen.getByText(/contact/i);

  expect(heading).toBeInTheDocument();
});
