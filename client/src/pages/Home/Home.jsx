import React from 'react';
import Hero from './Section/Hero';
import Offers from './Section/Offers';
import HomeBanner from '../../components/HomeContent/HomeBanner';
import HomeOffer from '../../components/HomeContent/HomeOffer';
import HomeHighlights from '../../components/HomeContent/HomeHiglights';
import HomeMenu from '../../components/HomeContent/HomeMenu';
import FAQ from '../../components/FAQContent/FAQ';


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
