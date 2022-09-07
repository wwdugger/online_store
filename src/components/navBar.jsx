import "./navBar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../store/storeContext";

const NavBar = () => {
  const cart = useContext(StoreContext).cart;

  const getNumItems = () => {
    let sum = 0;
    for (let i=0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  };

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/list">
                My List
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/admin">
                Admin
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <Link className="btn btn-outline-info" to="/cart">
              {getNumItems()} &nbsp; View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
