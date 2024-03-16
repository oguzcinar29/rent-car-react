import React from "react";

function Banner({ h1, h2 }) {
  return (
    <div className="header">
      <img src="images/hero/heroes-bg.png" alt="redcar"></img>
      <div className="text">
        <h1>{h1}</h1>
        <h2>{h2}</h2>
      </div>
    </div>
  );
}

export default Banner;
