import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/productsSlice";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const { category } = useParams();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filtered = category
    ? items.filter((p) => p.category === category)
    : items;

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "10px",
        padding: "10px",
      }}
    >
      {filtered.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
};

export default ProductsPage;