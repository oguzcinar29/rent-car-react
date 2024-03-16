import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "../useWindowDimensions/useWindowDimensions";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const { width } = useWindowDimensions();
  const [isMenuClicked, setMenuClicked] = useState(false);
  function closeMenu() {
    setMenuClicked((prevVal) => !prevVal);
  }
  return (
    <nav className="nav-container">
      <div className="nav-box">
        <div className="logo">
          <Link to="/">
            <img src="assets/1.png" alt="logo" />
          </Link>
        </div>
        <NavLinks />
        <div className="sign-in">
          <Link to="/">Sign In</Link>
          <Link className="orange-btn" to="/">
            Register
          </Link>
        </div>
        {width < 1000 && (
          <div className="menu">
            <button
              className={isMenuClicked ? "turn-orange-menu" : null}
              onClick={() => setMenuClicked((prevVal) => !prevVal)}
            >
              <MenuIcon />
            </button>
          </div>
        )}
      </div>
      {isMenuClicked && (
        <div className="menu-box">
          <div className="close-icon">
            <button onClick={() => setMenuClicked((prevVal) => !prevVal)}>
              <CloseIcon />
            </button>
          </div>

          <NavLinks closeMenu={closeMenu} isMenuClicked={isMenuClicked} />
        </div>
      )}
    </nav>
  );
}
