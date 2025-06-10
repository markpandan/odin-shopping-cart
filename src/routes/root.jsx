import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

function Root() {
  // Cart Item structure { id, name, price, image, quantity}
  const [cartItems, setCartItems] = useState([]);

  // TODO: Check if item was already present
  const addCartItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const changeCartItemQuantity = (id, amount) => {
    if (amount <= 0) return;

    const newCartItems = cartItems.map((item) => {
      if (item.id === id) return { ...item, quantity: amount };
      return item;
    });

    setCartItems(newCartItems);
  };

  return (
    <>
      <Navbar />
      <Outlet context={[cartItems, addCartItem, changeCartItemQuantity]} />
    </>
  );
}

export default Root;
