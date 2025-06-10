import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <Link to={"/product"} style={{ textDecoration: "none" }}>
      <div className={styles.productCardContainer}>
        <figure className={styles.productImage}></figure>
        <figcaption className={styles.productName}>Product Name</figcaption>
        <Link to={"/cart"}>
          <button className={styles.productButton}>Add To Cart</button>
        </Link>
      </div>
    </Link>
  );
}

export default ProductCard;
