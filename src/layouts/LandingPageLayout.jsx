import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../view/components/Footer'
import NavBarWithLogin from '../view/components/NavBarWithLogin'

const LandingPageLayout = () => {
  return (
    <>
      <NavBarWithLogin/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LandingPageLayout
