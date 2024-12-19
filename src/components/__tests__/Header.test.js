import Header from "../Header";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import appStore from "../../utils/appStore";

afterEach(() => {
  cleanup();
});

test("should load heading", () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );

  // Test for the presence of the HOME link
  const homeLink = screen.getByText("HOME");
  expect(homeLink).toBeInTheDocument();
});
test("should change login button to logout", () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );

  // Test for the presence of the HOME link
  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
