import React from 'react';
import ConHero from './ContactUs-section/ConHero';
import ConBoxes from './ContactUs-section/ConBoxes';
import ConMap from './ContactUs-section/ConMap'; 
import ConForm from './ContactUs-section/ConForm';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <ConHero />
      <ConBoxes />
      <ConForm/>
      <ConMap />
    </div>
  );
};

export default ContactUs;
