import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import App from "../App";

test("renders learn react link", () => {
  // Wrap App in MemoryRouter to provide routing context
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
