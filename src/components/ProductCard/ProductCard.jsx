import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

function ProductCard(props) {
  return (
    <div className={styles.productCardContainer}>
      <img className={styles.productImage} src={props.product.image}></img>
      <h3 className={styles.productName}>{props.product.title}</h3>
      <p>${props.product.price}</p>
      <button
        className={styles.productButton}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          props.onButtonClick();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ProductCard;
