import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1>EL Secreto</h1>
      <div>
        <Link to="category/tablas">Picadas Especiales</Link>
        <button>Ofertas</button>
        <button>Bebidas</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
