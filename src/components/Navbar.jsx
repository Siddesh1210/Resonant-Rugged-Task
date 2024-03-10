import React, { useState } from "react";
import "../assets/css/Navbar.css";
import Logo from "../assets/images/Resonate_Logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // State to manage the toggle state of the navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Function to toggle the collapse state
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Function to close the navbar when a link is clicked on small devices
  const handleNavLinkClick = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" onClick={handleNavLinkClick}>
          <img src={Logo} className="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={false} 
              >
                Products
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products/allwatches" onClick={handleNavLinkClick}>
                    Watches
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/allearbuds" onClick={handleNavLinkClick}>
                    Earbuds
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/alllaptops" onClick={handleNavLinkClick}>
                    Laptops
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" onClick={handleNavLinkClick}>
                Cart <i className="bi bi-cart3"></i>
                <sup>{cartItems.length}</sup>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
