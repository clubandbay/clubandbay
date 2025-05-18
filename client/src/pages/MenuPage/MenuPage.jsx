import React from 'react'
import MenuContent from '../../components/MenuContent/MenuContent'
import MenuHero from '../../components/MenuContent/MenuHero'
import HomeOffer from '../../components/HomeContent/HomeOffer'
import MenuHighlights from '../../components/MenuContent/MenuHighlights'

const MenuPage = () => {
  return (
    <div>
      <MenuHero />
      <MenuContent />
      <HomeOffer />
      <MenuHighlights />
    </div>
  )
}

export default MenuPage
