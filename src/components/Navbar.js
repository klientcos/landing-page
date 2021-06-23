import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innetWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            Lavasih
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="navbar-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign up" className="btn-link">
                  <Button buttonStyle="btn--outline"> Sign Up </Button>
                </Link>
              ) : (
                <Link to="/sign up" className="btn-link">
                  <Button buto="btn--outline btn--mobile"> SIGN UP</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
