import React from 'react';
import './ContactUs.css';
import ConHero from './ContactUs-section/ConHero';
import ConBoxes from './ContactUs-section/ConBoxes';
import ConMapForm from './ContactUs-section/ConMapForm'; // ✅ Updated import name

const ContactUs = () => {
  return (
    <div className="contact-us">
      <ConHero />
      <ConBoxes />
      <ConMapForm /> {/* ✅ Updated component name */}
    </div>
  );
};

export default ContactUs;
