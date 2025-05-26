import React from 'react';
import './Services.css';
import SubscriptionComponent from '../../components/SubscriptionContent/SubscriptionComponent';
import Hero from '../../components/Others/Hero';
import { SubscriptionHero } from '../../assets/data/heroData';

const Services = () => {
  return (
    <div>
      <Hero SubscriptionHero={SubscriptionHero} />
      <SubscriptionComponent />
    </div>
  );
};

export default Services;
