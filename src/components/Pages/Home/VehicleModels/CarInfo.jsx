import React from "react";

export default function CarInfo({
  name,
  price,
  model,
  mark,
  year,
  doors,
  air,
  transmission,
  fuel,
}) {
  return (
    <div className="car-info-boxs">
      <div className="car-info-box">
        <div className="header">
          <b>${price}</b>
          <h4>
            <span>/ </span>rent par a day
          </h4>
        </div>
        <div className="info first">
          <p>Model</p>
          <hr></hr>
          <p>{model}</p>
        </div>
        <div className="info">
          <p>Mark</p>
          <hr></hr>
          <p>{mark}</p>
        </div>
        <div className="info">
          <p>Year</p>
          <hr></hr>
          <p>{year}</p>
        </div>
        <div className="info">
          <p>Doors</p>
          <hr></hr>
          <p>{doors}</p>
        </div>
        <div className="info">
          <p>AC</p>
          <hr></hr>
          <p>{air}</p>
        </div>
        <div className="info">
          <p>Transmission</p>
          <hr></hr>
          <p>{transmission}</p>
        </div>
        <div className="info last">
          <p>Fuel</p>
          <hr></hr>
          <p>{fuel}</p>
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({
            top: 700,
            behavior: "smooth", // Add smooth scrolling behavior
          });
        }}
      >
        RESERVE NOW
      </button>
    </div>
  );
}
