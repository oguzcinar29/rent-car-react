import React from "react";
import Banner from "../../Banner";
import WorkerCard from "./WorkerCard";
export default function OurTeam() {
  return (
    <section className="our-team-container">
      <Banner h1="Our Team" h2="Home / Our Team" />
      <WorkerCard />
    </section>
  );
}
