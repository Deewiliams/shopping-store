import React from "react";
import { render } from "@testing-library/react";
import Header from "../Component/Header"

describe("Header", () => {
  it("renders the header title", () => {
    const container = render(<Header />);
    expect(container.queryByTestId("title").textContent).toContain(
      "Let's Shop"
    );
  });
});