import React from "react";
import { render } from "@testing-library/react";
import Loading from "../Component/Loading"

describe("Loading", () => {
    it("renders the loading component", () => {
        const container = render(<Loading />);
        expect(container.queryByTestId("loading").textContent).toContain(
            "Loading..."
        );
    });
});