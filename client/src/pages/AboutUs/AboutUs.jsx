import React from "react";
import AboutHero from "./Section/AboutHero";
import Welcome from "./Section/welcome";
import WhyUs from "./Section/whyus";
import Kitchen from "./Section/kitchen";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <Welcome/>
      <WhyUs/>
      <Kitchen />
    </div>
  );
};

export default AboutUs;
