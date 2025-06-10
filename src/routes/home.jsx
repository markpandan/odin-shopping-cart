import styles from "./home.module.css";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetchStoreItems from "../hooks/useFetchStoreItems";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [productList] = useFetchStoreItems();
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
    <div className={`container ${styles.productList}`}>
      {productList.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onButtonClick={() => onAddCartItem(product)}
        ></ProductCard>
      ))}
    </div>
  );
}

export default Home;
