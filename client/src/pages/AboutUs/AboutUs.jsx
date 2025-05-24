import React from "react";
// import AboutHero from "./Section/AboutHero";
import Welcome from "./Section/welcome";
import WhyUs from "./Section/whyus";
import Kitchen from "./Section/kitchen";
import Hero from "../../components/Others/Hero";
import { AboutHero } from "../../assets/data/heroData";

const AboutUs = () => {
  return (
    <div>
      {/* <AboutHero /> */}
      <Hero AboutHero={AboutHero} />
      <Welcome/>
      <WhyUs/>
      <Kitchen />
    </div>
  );
};

export default AboutUs;
