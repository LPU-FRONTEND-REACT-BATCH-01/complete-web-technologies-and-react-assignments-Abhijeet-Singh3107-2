import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} width="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;