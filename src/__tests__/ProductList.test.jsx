import React from "react";
import { render } from "@testing-library/react";
import ProductList from "../Pages/ProductList";
import { BrowserRouter } from "react-router-dom";

describe("RenderMovies", () => {
  it("renders without crashing", () => {
    const movies = [
      {
        id: "1",
        title: "black panther",
        images: "https://www.howtogeek.com/356563/what-is-a-url-uniform-resource-locator/",
      },
    ];
    render(
        <ProductList />
    );
  });
});