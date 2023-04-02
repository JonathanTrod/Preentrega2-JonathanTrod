import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1>EL Secreto</h1>
      <div>
        <Link
          to="/category/Especial"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Especial
        </Link>
        <Link
          to="/category/Super"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Super
        </Link>
        <Link
          to="/category/Comun"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Comun
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
