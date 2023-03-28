import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>EL Secreto</h1>
      <div>
        <Link to="category/tablas">Picadas Especiales</Link>
        <button>Ofertas</button>
        <button>Bebidas</button>
      </div>
    </nav>
  );
};

export default NavBar;
