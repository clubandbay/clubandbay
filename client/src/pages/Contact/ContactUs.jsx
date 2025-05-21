import React from 'react';
import './ContactUs.css';
import ConHero from './ContactUs-section/ConHero';
import ConBoxes from './ContactUs-section/ConBoxes';
import ConMapForm from './ContactUs-section/ConMapForm'; 

const ContactUs = () => {
  return (
    <div className="contact-us">
      <ConHero />
      <ConBoxes />
      <ConMapForm />
    </div>
  );
};

export default ContactUs;
