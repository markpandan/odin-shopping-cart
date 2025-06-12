import { useOutletContext } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Cart from "../routes/cart";
import { render, screen } from "@testing-library/react";

vi.mock("react-router-dom");

describe("Cart page", () => {
  it("Check if the cart was empty", () => {
    const cartItems = [];
    useOutletContext.mockReturnValue([cartItems]);

    render(<Cart />);
    const text = screen.getByRole("heading").textContent;

    expect(text).toMatch(/Cart Is Empty. Add Some!/i);
  });

  it("Calculates the total number products multiplied by quantity", () => {
    const cartItems = [
      { id: 0, title: "Foo", price: 20, image: "Foo", quantity: 2 },
      { id: 0, title: "Bar", price: 40, image: "Bar", quantity: 3 },
    ];
    useOutletContext.mockReturnValue([cartItems]);

    render(<Cart />);

    const text = screen.getByRole("paragraph").textContent;

    expect(text).toMatch(/160/i);
  });
});
