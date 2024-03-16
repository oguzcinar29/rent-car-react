import React, { useContext } from "react";
import { CarContext } from "../../../Context/CarContext";
import CarInfo from "./CarInfo";
import VehicleButtonsCard from "./VehicleButtonsCard";
function VehicleModelsHome() {
  const { imgLink, carArr } = useContext(CarContext);

  return (
    <section className="vehicle-home-container">
      <div className="vehicle-models-box">
        <div className="vehicle-text">
          <h3>Vehicle Models</h3>
          <h1>Our rental fleet</h1>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="vehicle-bottom">
          <div className="buttons">
            {carArr.map((item, index) => {
              return <VehicleButtonsCard key={index} name={item[0].name} />;
            })}
          </div>
          <div className="vehicle-img">
            <img src={imgLink} alt="carphoto"></img>
          </div>
          <div className="car-info">
            {carArr.map((item, index) => {
              if (item[0].img === imgLink) {
                return <CarInfo {...item[0]} key={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleModelsHome;
