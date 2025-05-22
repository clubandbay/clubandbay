import React from 'react';
import './ConMap.css';

const ConMapForm = () => {
  return (
    <section className="map-only-section">
      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.5723794409466!2d-80.20861058497354!3d25.771120583625106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fca5ba9c9%3A0x4f0c57b4d06b76de!2s821%20SW%202nd%20St%20APT%2010%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2sin!4v1620412177734!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ConMapForm;
