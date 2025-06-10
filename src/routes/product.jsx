import styles from "./product.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div className={`container ${styles.productBody}`}>
        <div className={styles.productImage}></div>
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>Lorem Ipsum</h1>
          <p className={styles.productDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo
            expedita libero iste, consequatur facere quaerat similique delectus
            perferendis eaque nulla ipsum sed quibusdam magnam quia mollitia
            esse vitae nisi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi a neque enim quas recusandae itaque obcaecati
            exercitationem beatae porro libero repellat saepe, dignissimos autem
            sunt. Debitis voluptate doloribus id veritatis!
          </p>
          <div>
            <Link to={"/cart"}>
              <button>Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
