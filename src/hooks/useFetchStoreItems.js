import { useEffect, useState } from "react";

function useFetchStoreItems(productId = "") {
  // If productId has a valid value, this function will return an object. Otherwise, it will be an array.
  const [items, setItems] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchItems = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
          { signal: abortController.signal }
        );
        const storeItems = await response.json();

        setItems(storeItems);
      } catch (error) {
        if (error.name === "AbortError") console.log("Fetch aborted");
        else console.log(error);
      }
    };

    fetchItems();

    return () => abortController.abort();
  }, [productId]);

  return [items, setItems];
}

export default useFetchStoreItems;
