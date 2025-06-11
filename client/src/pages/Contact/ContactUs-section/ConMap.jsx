import React from 'react';
import './ConMap.css';

const ConMapForm = () => {
  return (
    <section className="map-only-section">
      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.208981962227!2d72.85060161490268!3d19.089559887078934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887f8fc3a97%3A0x7e8614bb64cdd4ef!2s03%20Patel%20Plot%2C%20Kalina%2C%20Santacruz%20East%2C%20Mumbai%2C%20Maharashtra%20400029!5e0!3m2!1sen!2sin!4v1718123456789!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ConMapForm;
