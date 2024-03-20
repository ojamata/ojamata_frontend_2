import React from 'react'
import Hero from './Hero'
import Ads from './Ads'
import Benefits from './Benefits'
import MobileApp from './MobileApp'
import ExploreCategoriesWithAddToCart from './ExploreCategoriesWithAddToCart'


const LandingPageWithAddToCart = () => {
  return (
    <div className='pt-[120px]'>
        <Hero/>
        <Ads/>
        <ExploreCategoriesWithAddToCart/>
        <Benefits/>
        <MobileApp/>
    </div>
  )
}

export default LandingPageWithAddToCart
