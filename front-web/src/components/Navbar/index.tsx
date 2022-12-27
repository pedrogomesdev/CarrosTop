import "./styles.css";
import "bootstrap/js/src/collapse.js";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark nav-principal fixed-top">
      <div className="container-fluid">
        <div>
          <h4>Carros Top</h4>
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
            <li className="active">Home</li>
            <li>Catálogo</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
