import React from "react";

function AboutHeader() {
  return (
    <div className="about-header-box">
      <img src="images/about/about-main.jpg" alt="1man1woman"></img>
      <div className="right-side">
        <h3>About Company</h3>
        <h1>You start the engine and your adventure begins</h1>
        <p>
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>
        <div className="about-three-box">
          <div className="about-box">
            <img src="images/about/icon1.png"></img>
            <div className="about-text">
              <h1>20</h1>
              <p>Car Types</p>
            </div>
          </div>
          <div className="about-box">
            <img src="images/about/icon1.png"></img>
            <div className="about-text">
              <h1>85</h1>
              <p>Rental Outlets</p>
            </div>
          </div>
          <div className="about-box">
            <img src="images/about/icon1.png"></img>
            <div className="about-text">
              <h1>75</h1>
              <p>Repair Shop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
