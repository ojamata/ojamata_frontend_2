import React from 'react'
import NavBarOrderManger from '../view/components/NavBarOrderManger'
import { Outlet } from 'react-router-dom'

const OrderManagerLayout = () => {
  return (
    <>
      <NavBarOrderManger/>
      <Outlet/>
    </>
  )
}

export default OrderManagerLayout
