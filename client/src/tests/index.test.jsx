// write test for checking the rendering of the App component
// use the render method from react-testing-library

import React from "react";
import { render } from "@testing-library/react";
import NotFound from "../pages/NotFound.jsx";
import StudyCard from "../components/StudyCard.jsx";

describe("StudyCard", () => {
  it("renders without crashing", () => {
    render(<StudyCard />);
  });

  it("checks if anchor tag has download text on it", () => {
    const { getByText } = render(<StudyCard />);
    expect(getByText("Download")).toBeInTheDocument();
  });
});

describe("NotFound", () => {
  it("renders without crashing", () => {
    render(<NotFound />);
  });

  it("checks if the heading is 404", () => {
    const { getByText } = render(<NotFound />);
    expect(getByText("404: Page Not Found")).toBeInTheDocument();
  });
});
