import React from "react";
import HomeHeader from "./HomeHeader";
import HomeBookCar from "./HomeBookCar";
import HomeThreeBox from "./HomeThreeBox";
import BigCarImgs from "./BigCarImgs/BigCarImgs";
import Testimonials from "./Testimonials/Testimonials";
import Faq from "./Faq/Faq";
import Download from "./DownloadSection/Download";
import VehicleModelsHome from "./VehicleModels/VehicleModelsHome";

export default function Home() {
  return (
    <section className="home-container">
      <HomeHeader />
      <HomeBookCar />
      <HomeThreeBox />
      <VehicleModelsHome />
      <BigCarImgs />
      <Testimonials />
      <Faq />
      <Download />
    </section>
  );
}
