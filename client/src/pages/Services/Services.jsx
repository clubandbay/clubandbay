import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page" id="services">
      <h2>Our Services & Subscription</h2>
      <div className="services-list">
        <div className="service-box">
          <h3>Weekly Subscription</h3>
          <p>Choose from flexible weekly meal plans tailored to your preferences.</p>
        </div>
        <div className="service-box">
          <h3>Custom Orders</h3>
          <p>Order individual meals based on your current cravings, anytime.</p>
        </div>
        <div className="service-box">
          <h3>Family Plans</h3>
          <p>Special meal combos and pricing for families of 3 or more.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
