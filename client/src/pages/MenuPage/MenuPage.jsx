import React from 'react'
import MenuContent from '../../components/MenuContent/MenuContent'
import HomeOffer from '../../components/HomeContent/HomeOffer'
import MenuHighlights from '../../components/MenuContent/MenuHighlights'
import Hero from '../../components/Others/Hero'
import { MenuHero } from '../../assets/data/heroData'

const MenuPage = () => {
  return (
    <div>
      <Hero MenuHero={MenuHero} />
      <MenuContent />
      <HomeOffer />
      <MenuHighlights />
    </div>
  )
}

export default MenuPage
