import { Link, useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard() {
  const navigate = useNavigate();

  return (
    <Link to={"/product"} style={{ textDecoration: "none" }}>
      <div className={styles.productCardContainer}>
        <figure className={styles.productImage}></figure>
        <figcaption className={styles.productName}>Product Name</figcaption>
        <button
          className={styles.productButton}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            navigate("/cart");
          }}
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
