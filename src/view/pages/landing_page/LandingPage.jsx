import React from 'react'
import Hero from './Hero'
import Ads from './Ads'
import ExploreCategories from './ExploreCategories'
import Benefits from './Benefits'
import MobileApp from './MobileApp'

const LandingPage = () => {
  return (
    <div className=' lg:px-0 px-10 pt-[120px] overflow-scroll'>
        <Hero/>
        <Ads/>
        <ExploreCategories/>
        <Benefits/>
        <MobileApp/>
    </div>
  )
}

export default LandingPage
