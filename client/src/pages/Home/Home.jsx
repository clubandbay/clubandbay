import React from 'react';
import Hero from './Section/Hero';
import Offers from './Section/Offers';
import FAQ from './Section/FAQ';
import HomeBanner from '../../components/HomeContent/HomeBanner';
import HomeOffer from '../../components/HomeContent/HomeOffer';
import HomeHighlights from '../../components/HomeContent/HomeHiglights';
import HomeMenu from '../../components/HomeContent/HomeMenu';


const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <HomeMenu />
      <HomeBanner />
      <HomeOffer />
      <HomeHighlights />
      <Offers />
      <FAQ />
    </div>
  );
};

export default Home;
