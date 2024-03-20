import React from 'react'
import NavBarWithoutLogin from '../view/components/NavBarWithoutLogin'
import { Outlet } from 'react-router-dom'
import Footer from '../view/components/Footer'

const CustomerPageLayout = () => {
  return (
    <>
      <NavBarWithoutLogin/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default CustomerPageLayout
