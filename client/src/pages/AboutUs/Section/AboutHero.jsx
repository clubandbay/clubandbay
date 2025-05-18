import React from "react";
import "./AboutHero.css"; // Import the CSS

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="overlay">
        <h1 className="hero-title">Learn More About Us</h1>
        <p className="hero-description">
          We are committed to delivering fresh, healthy, and delicious meals
          right to your door. Our team of chefs and nutrition experts craft
          weekly menus with quality ingredients.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
