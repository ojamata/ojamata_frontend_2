import React from 'react'
import NavBarAdmin from '../view/components/NavBarAdmin'
import { Outlet } from 'react-router-dom'

const AdminPageLayout = () => {
  return (
    <>
      <NavBarAdmin/>
      <Outlet/>
    </>
  )
}

export default AdminPageLayout
