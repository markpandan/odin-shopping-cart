import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onButtonClick }) {
  // const navigate = useNavigate();

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <div className={styles.productCardContainer}>
        <img className={styles.productImage} src={product.image}></img>
        <h3 className={styles.productName}>{product.title}</h3>
        <p>${product.price}</p>
        <button
          className={styles.productButton}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onButtonClick();
          }}
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
