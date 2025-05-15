import React from 'react';
import Hero from './Section/Hero';
import Menu from './Section/Menu';
import Offers from './Section/Offers';
import FAQ from './Section/FAQ';


const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <Offers />
      <FAQ />
    </div>
  );
};

export default Home;
