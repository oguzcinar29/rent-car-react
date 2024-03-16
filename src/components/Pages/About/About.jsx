import React from "react";
import Banner from "../../Banner";
import HomeThreeBox from "../Home/HomeThreeBox";
import AboutHeader from "./AboutHeader";

export default function About() {
  return (
    <section className="about-container">
      <Banner h1="About" h2="Home / About" />
      <AboutHeader />
      <HomeThreeBox />
    </section>
  );
}
