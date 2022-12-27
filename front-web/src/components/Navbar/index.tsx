import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark nav-principal fixed-top">
      <div className="container-fluid">
        <div>
          <Link to="/" className="nav-logo remove-sublinhado ">
            <h4>Carros Top</h4>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-9 menu-principal">
            <NavLink to="/" activeClassName="active" className="remove-sublinhado" exact>
              <li>Home</li>
            </NavLink>

            <NavLink to="/Catalog" activeClassName="active" className="remove-sublinhado ">
              <li>Catálogo</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
