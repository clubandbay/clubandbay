import React from 'react';
import Offers from './Section/Offers';
import HomeBanner from '../../components/HomeContent/HomeBanner';
import HomeHighlights from '../../components/HomeContent/HomeHiglights';
import HomeMenu from '../../components/HomeContent/HomeMenu';
import FAQ from '../../components/FAQContent/FAQ';
import Hero from '../../components/Others/Hero';
import { HomeHero } from '../../assets/data/heroData';
import TrustUs from '../../components/HomeContent/TrustUs';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero HomeHero={HomeHero} />
      </div>
      <Offers />
      <HomeMenu />
      <HomeBanner />
      <TrustUs />
      <HomeHighlights />
      
      <FAQ />
    </div>
  );
};

export default Home;
