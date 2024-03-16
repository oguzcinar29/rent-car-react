import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function HomeHeader() {
  return (
    <div className="home-header-container">
      <div className="home-header">
        <div className="header-info">
          <h3>Plan your trip now</h3>
          <h2>
            Save <span>big</span> with our car rental
          </h2>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="header-btns">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 700,
                  behavior: "smooth", // Add smooth scrolling behavior
                });
              }}
              className="header-orange-btn"
            >
              Book ride
              <span>
                <CheckCircleOutlineIcon />
              </span>
            </button>
            <button className="header-black-btn">
              Learn More
              <span>
                <KeyboardArrowRightIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="header-img">
          <img src="assets/2.png" alt="red car img" />
        </div>
      </div>
    </div>
  );
}
