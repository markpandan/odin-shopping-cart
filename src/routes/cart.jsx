import { useOutletContext } from "react-router-dom";
import styles from "./cart.module.css";
import CartItem from "../components/CartItem/CartItem";

function Cart() {
  const [cartItems, _, changeCartItemQuantity] = useOutletContext();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Cart Is Empty. Add Some!</h2>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => item.price * item.quantity + sum,
    0
  );

  return (
    <>
      <div className={`container`}>
        <h1 className={styles.headerTitle}>Your Cart</h1>
        <ul className={styles.productSelectedList}>
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onQuantityChange={(id, quantity) =>
                changeCartItemQuantity(id, quantity)
              }
            />
          ))}
        </ul>
        <hr />
        <div className={styles.cartDetails}>
          <p className={styles.cartTotalPrice}>
            <strong>Total: </strong>${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
