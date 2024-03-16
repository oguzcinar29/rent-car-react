import React from "react";
import Banner from "../Banner";
import Testimonials from "./Home/Testimonials/Testimonials";
function TestimonailsPage() {
  return (
    <section className="contact-container">
      <Banner h1="Testimonials" h2="Home / Testimonials" />
      <Testimonials />
    </section>
  );
}

export default TestimonailsPage;
