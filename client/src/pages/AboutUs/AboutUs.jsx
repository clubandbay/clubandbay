import React from "react";
import AboutHero from "./Section/AboutHero";
import Welcome from "./Section/welcome";
import WhyUs from "./Section/whyus";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <Welcome/>
      <WhyUs/>
    </div>
  );
};

export default AboutUs;
