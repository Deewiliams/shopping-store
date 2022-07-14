import React from "react";
import { render } from "@testing-library/react";
import Category from "../Pages/Category";

describe("RenderMovies", () => {
  it("renders without crashing", () => {
    const category = [
      {
        id: "1",
        title: "black panther",
        images: "https://www.howtogeek.com/356563/what-is-a-url-uniform-resource-locator/",
      },
    ];
    render(
        <Category category={category} />
    );
  });
});