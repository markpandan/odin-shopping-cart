import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProductCard from "../components/ProductCard/ProductCard";

describe("ProductCard component", () => {
  it("Should call onButton click when for adding the product item to the cart", async () => {
    const onButtonClick = vi.fn();
    const user = userEvent.setup();

    const product = {
      id: 0,
      title: "Test",
      price: 20,
      image: "url",
      quantity: 1,
    };

    render(<ProductCard product={product} onButtonClick={onButtonClick} />);
    const button = screen.getByRole("button", { name: "Add To Cart" });

    await user.click(button);
    expect(onButtonClick).toHaveBeenCalled();
  });
});
