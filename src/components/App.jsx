import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import VehicleModels from "./Pages/VehicleModelsPage/VehicleModels";
import TestimonailsPage from "./Pages/TestimonailsPage";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import { CarContext } from "./Context/CarContext";
import Footer from "./Footer/Footer";

export default function App() {
  const { isSearchClicked } = useContext(CarContext);
  return (
    <section
      className={isSearchClicked ? "container pointerEvent" : "container"}
    >
      <Navbar />
      <div className="links-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehiclemodels" element={<VehicleModels />} />
          <Route path="/testimonials" element={<TestimonailsPage />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
}
