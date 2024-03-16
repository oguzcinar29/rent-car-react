import React from "react";

export default function HomeThreeBox() {
  return (
    <section className="three-box-container">
      <div className="three-box">
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
        <div className="three">
          <div className="box">
            <img src="../images/plan/icon1.png"></img>
            <h4>Select Car</h4>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="box">
            <img src="../images/plan/icon2.png"></img>
            <h4>Contact Operator</h4>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="box">
            <img src="../images/plan/icon3.png"></img>
            <h4>Let's Drive</h4>
            <p>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
