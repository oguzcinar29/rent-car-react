import React, { createContext, useState } from "react";
import { CAR_DATA } from "../../data";
import { CAR_DATA2 } from "../../data";
export const CarContext = createContext(null);

function CarContextProvider({ children }) {
  const [isSearchClicked, setSearchClicked] = useState(false);
  const [carArr, setCarArr] = useState(CAR_DATA);
  const [carArr2, setCarArr2] = useState(CAR_DATA2);
  const [carModel, setCarModel] = useState("Audi A1 S-Line");
  const [imgLink, setImgLink] = useState("../images/cars-big/audia1.jpg");
  const findTheImg = (val) => {
    carArr.map((item) => {
      if (item[0].name === val) {
        setImgLink(item[0].img);
      }
    });
  };
  const changeCarModel = (e) => {
    setCarModel(() => e.target.textContent);
  };
  const CarItems = {
    carArr,
    isSearchClicked,
    setSearchClicked,
    carModel,
    changeCarModel,
    findTheImg,
    carArr2,
    imgLink,
  };
  return <CarContext.Provider value={CarItems}>{children}</CarContext.Provider>;
}

export default CarContextProvider;
