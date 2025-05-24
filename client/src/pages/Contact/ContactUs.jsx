import React from 'react';
import ConBoxes from './ContactUs-section/ConBoxes';
import ConMap from './ContactUs-section/ConMap'; 
import ConForm from './ContactUs-section/ConForm';
import Hero from '../../components/Others/Hero';
import { ContactHero } from '../../assets/data/heroData';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Hero ContactHero={ContactHero}/>
      <ConBoxes />
      <ConForm/>
      <ConMap />
    </div>
  );
};

export default ContactUs;
