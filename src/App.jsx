import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const dummyContainer = Array(8).fill(null);
  return (
    <>
      <Navbar></Navbar>
      <div className="product-list">
        {dummyContainer.map(() => (
          <ProductCard></ProductCard>
        ))}
      </div>
    </>
  );
}

export default App;
