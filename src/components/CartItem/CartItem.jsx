import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

function CartItem({ product, onQuantityChange }) {
  return (
    <li>
      <img className={styles.cartImage} src={product.image}></img>
      <div className={styles.cartDetail}>
        <h2>{product.title}</h2>
        <div>
          <h1 className={styles.cartPrice}>${product.price}</h1>
          <div className={styles.cartQuantity}>
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

CartItem.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
