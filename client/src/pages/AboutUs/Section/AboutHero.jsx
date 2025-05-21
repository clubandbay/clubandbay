import React from "react";
import "./AboutHero.css"; 

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="overlay">
        <h1 className="hero-title">"Crafting Delicious Moments, Every Day"</h1>
        <p className="hero-description">
          "From our kitchen to your table, we serve meals made 
          <pre/>   with love, fresh ingredients, and a pinch of passion. <br/>Discover food that feels like home."
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
