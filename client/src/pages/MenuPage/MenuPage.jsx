import React from 'react'
import MenuContent from '../../components/MenuContent/MenuContent'
import MenuHighlights from '../../components/MenuContent/MenuHighlights'
import Hero from '../../components/Others/Hero'
import { MenuHero } from '../../assets/data/heroData'
import MenuOffer from '../../components/MenuContent/MenuOffer'

const MenuPage = () => {
  return (
    <div>
      <Hero MenuHero={MenuHero} />
      <MenuContent />
      <MenuOffer />
      <MenuHighlights />
    </div>
  )
}

export default MenuPage
