import { useOutletContext } from "react-router-dom";
import styles from "./cart.module.css";

function ProductSelectedItem({ product, onQuantityChange }) {
  return (
    <li>
      <img className={styles.productImage} src={product.image}></img>
      <div className={styles.productDetail}>
        <h2>{product.title}</h2>
        <div>
          <h1 className={styles.productPrice}>${product.price}</h1>
          <div className={styles.productQuantity}>
            <button
              onClick={() => onQuantityChange(product.id, product.quantity + 1)}
            >
              +
            </button>
            <input
              type="number"
              value={product.quantity}
              onChange={({ target }) =>
                onQuantityChange(product.id, target.value)
              }
            />
            <button
              onClick={() => onQuantityChange(product.id, product.quantity - 1)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

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
            <ProductSelectedItem
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
