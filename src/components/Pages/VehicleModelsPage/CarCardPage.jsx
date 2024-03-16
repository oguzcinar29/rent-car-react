import React, { useContext } from "react";
import { CarContext } from "../../Context/CarContext";
import CarCard from "./CarCard";

function CarCardPage() {
  const { carArr2 } = useContext(CarContext);
  return (
    <div className="car-card-box">
      <div className="car-card">
        {carArr2.map((item) => {
          return <CarCard {...item[0]} key={item[0].id} />;
        })}
      </div>
    </div>
  );
}

export default CarCardPage;
