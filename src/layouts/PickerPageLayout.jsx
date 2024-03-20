import React from 'react'
import NavBarPlain from '../view/components/NavBarPicker'
import { Outlet } from 'react-router-dom'
import Footer from '../view/components/Footer'

const PickerPageLayout = () => {
  return (
    <>
      <NavBarPlain/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default PickerPageLayout
