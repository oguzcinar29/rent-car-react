import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function BigCarImgs() {
  return (
    <section className="big-car-container">
      <div className="big-car-box">
        <div className="big-car-header">
          <h1>Save big with our cheap car rental!</h1>
          <h4>
            Top Airports. Local Suppliers. <span>24/7</span> Support.
          </h4>
        </div>
        <div className="big-car-background">
          <div className="big-car-imgs">
            <img
              src="https://car-rental-ten.vercel.app/static/media/main.70cd75042bdf42515d92.png"
              alt="big-cars"
            ></img>
            <div className="info-box">
              <div className="text">
                <h5>Why Choose Us</h5>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <button
                  className="btn"
                  onClick={() => {
                    // Smooth scroll to the y-coordinate 700
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Find Details
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </button>
              </div>
              <div className="circle-imgs">
                <div className="circle-box">
                  <img src="images/chooseUs/icon1.png"></img>
                  <div className="circle-box-text">
                    <h3>Cross Country Drive</h3>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="circle-box">
                  <img src="images/chooseUs/icon2.png"></img>
                  <div className="circle-box-text">
                    <h3>All Inclusive Pricing</h3>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="circle-box">
                  <img src="images/chooseUs/icon3.png"></img>
                  <div className="circle-box-text">
                    <h3>No Hidden Charges</h3>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
