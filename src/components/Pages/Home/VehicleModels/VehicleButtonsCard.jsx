import React, { useContext, useState } from "react";
import { CarContext } from "../../../Context/CarContext";

export default function VehicleButtonsCard({ name }) {
  const { changeCarModel, findTheImg, carModel } = useContext(CarContext);

  return (
    <button
      onClick={(e) => {
        changeCarModel(e);
        findTheImg(name);
      }}
      className={carModel === name ? "change-orange" : null}
    >
      {name}
    </button>
  );
}
