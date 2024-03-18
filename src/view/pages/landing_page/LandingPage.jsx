import React from 'react'
import Hero from './Hero'
import Ads from './Ads'
import ExploreCategories from './ExploreCategories'
import Benefits from './Benefits'
import MobileApp from './MobileApp'

const LandingPage = () => {
  return (
    <div className='pt-[120px]'>
        <Hero/>
        <Ads/>
        <ExploreCategories/>
        <Benefits/>
        <MobileApp/>
    </div>
  )
}

export default LandingPage
