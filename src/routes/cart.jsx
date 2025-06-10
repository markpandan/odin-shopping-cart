import Navbar from "../components/Navbar/Navbar";
import styles from "./cart.module.css";

function Cart() {
  return (
    <>
      <Navbar />
      <div className={`container`}>
        <h1 className={styles.headerTitle}>Your Cart</h1>
        <ul className={styles.productSelectedList}>
          <li>
            <div className={styles.productImage}></div>
            <div className={styles.productDetail}>
              <h2>Product 1</h2>
              <div className={styles.productQuantity}>
                <button>+</button>
                <p>0</p>
                <button>-</button>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.productImage}></div>
            <div className={styles.productDetail}>
              <h2>Product 2</h2>
              <div className={styles.productQuantity}>
                <button>+</button>
                <p>0</p>
                <button>-</button>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.productImage}></div>
            <div className={styles.productDetail}>
              <h2>Product 3</h2>
              <div className={styles.productQuantity}>
                <button>+</button>
                <p>0</p>
                <button>-</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cart;
