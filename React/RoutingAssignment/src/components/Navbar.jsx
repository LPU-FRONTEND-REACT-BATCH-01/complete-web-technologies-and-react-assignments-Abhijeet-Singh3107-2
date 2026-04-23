import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.products.items);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <NavLink to="/">All</NavLink>

      {categories.map((cat) => (
        <NavLink
          key={cat}
          to={`/products/${cat}`}
          style={{ marginLeft: "10px" }}
        >
          {cat}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;