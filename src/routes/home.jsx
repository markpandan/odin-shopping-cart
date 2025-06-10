import styles from "./home.module.css";
import ProductCard from "../components/ProductCard/ProductCard";
// import { useState, useEffect } from "react";
import useFetchStoreItems from "../hooks/useFetchStoreItems";

function Home() {
  const [productList] = useFetchStoreItems();

  return (
    <div className={`container ${styles.productList}`}>
      {productList.map((product, index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default Home;
