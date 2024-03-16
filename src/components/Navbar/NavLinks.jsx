import React from "react";
import { Link } from "react-router-dom";
export default function NavLinks({ isMenuClicked, closeMenu }) {
  return (
    <div className="nav-links">
      <ul className={isMenuClicked ? "menu-links-list" : "nav-links-list"}>
        <li>
          <Link onClick={closeMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/vehiclemodels">
            Vehicle Models
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/ourteam">
            Our Team
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
