import React from "react";
import Banner from "../../Banner";
import CarCardPage from "./CarCardPage";
function VehicleModels() {
  return (
    <section className="vehicle-container">
      <Banner h1="Vehicle Models" h2="Home / Vehicle Models" />
      <CarCardPage />
    </section>
  );
}

export default VehicleModels;
