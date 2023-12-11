import React from "react";
import { render } from "@testing-library/react";
import Flow from "./Flow"; // Import the component you want to test

describe("Flow Component", () => {
  it("renders without crashing", () => {
    render(<Flow />);
  });
});
