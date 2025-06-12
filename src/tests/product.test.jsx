import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "../routes/product";
import useFetchStoreItems from "../hooks/useFetchStoreItems";
import { useOutletContext, useParams } from "react-router-dom";

vi.mock("../hooks/useFetchStoreItems.js");
useFetchStoreItems.mockReturnValue([
  { id: 1, title: "Foo", description: "Lorem Ipsum" },
]);

vi.mock("react-router-dom");
useOutletContext.mockReturnValue([vi.fn(), vi.fn()]);
useParams.mockReturnValue(0);

describe("Product page", () => {
  it("Displays the product title correctly", () => {
    render(<Product />);

    const text = screen.getByRole("heading").textContent;

    expect(text).toMatch(/Foo/i);
  });

  it("Dispaly the product description correctly", () => {
    render(<Product />);

    const text = screen.getByRole("paragraph").textContent;

    expect(text).toMatch(/Lorem Ipsum/i);
  });
});
