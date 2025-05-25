import React from 'react';
import HomeBanner from '../../components/HomeContent/HomeBanner';
import HomeHighlights from '../../components/HomeContent/HomeHiglights';
import HomeMenu from '../../components/HomeContent/HomeMenu';
import FAQ from '../../components/FAQContent/FAQ';
import Hero from '../../components/Others/Hero';
import { HomeHero } from '../../assets/data/heroData';
import TrustUs from '../../components/HomeContent/TrustUs';
import HomeOffer from '../../components/HomeContent/HomeOffer';
import HomeSubscription from '../../components/HomeContent/HomeSubscription';

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero HomeHero={HomeHero} />
      </div>
      <TrustUs />
      <HomeOffer />
      <HomeMenu />
      <HomeBanner />
      <HomeSubscription />
      <HomeHighlights />
      <FAQ />
    </div>
  );
};

export default Home;
