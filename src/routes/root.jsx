import styles from "./root.module.css";

import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";

function Root() {
  const dummyContainer = Array(8).fill(null);
  return (
    <>
      <Navbar></Navbar>
      <div className={`container ${styles.productList}`}>
        {dummyContainer.map((_, index) => (
          <ProductCard key={index}></ProductCard>
        ))}
      </div>
    </>
  );
}

export default Root;
