import RestrCard from "../RestrCard";
import mock_data from "../../components/mock_data/mockData";
import { screen, render } from "@testing-library/react";

test("should render card with prop data", () => {
  render(<RestrCard resData={mock_data[0]} />); // Access the first item in mock_data
  const name = screen.getByText("Italian Delights");
  expect(name).toBeInTheDocument();
});
