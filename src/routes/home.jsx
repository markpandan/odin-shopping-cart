import styles from "./home.module.css";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  const dummyContainer = Array(8).fill(null);

  return (
    <div className={`container ${styles.productList}`}>
      {dummyContainer.map((_, index) => (
        <ProductCard key={index}></ProductCard>
      ))}
    </div>
  );
}

export default Home;
