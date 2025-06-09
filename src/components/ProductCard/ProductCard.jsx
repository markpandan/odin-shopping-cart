import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.productCardContainer}>
      <figure className={styles.productImage}></figure>
      <figcaption className={styles.productName}>Product Name</figcaption>
      <button className={styles.productButton}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
