import { Link } from "react-router-dom";

const ProductCard = ({ p }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img src={p.thumbnail} alt={p.title} width="150" />
      <h4>{p.title}</h4>
      <p>${p.price}</p>
      <Link to={`/product/${p.id}`}>View More</Link>
    </div>
  );
};

export default ProductCard;