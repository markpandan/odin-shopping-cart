import styles from "./product.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import useFetchStoreItems from "../hooks/useFetchStoreItems";

function Product() {
  const params = useParams();
  const [productItem] = useFetchStoreItems(params.productId);
  const [_, addCartItem] = useOutletContext();

  const onAddCartItem = (product) => {
    addCartItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <>
      <div className={`container ${styles.productBody}`}>
        <img className={styles.productImage} src={productItem.image}></img>
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>{productItem.title}</h1>
          <p className={styles.productDescription}>{productItem.description}</p>
          <div>
            <Link to={"/cart"} onClick={() => onAddCartItem(productItem)}>
              <button>Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
