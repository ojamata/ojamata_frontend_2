import React, { useState } from 'react'
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import AdminsPickerOrder from '../pages/admins_list/AdminsPickerOrder';
import AdminsCustomerOrderList from '../pages/admins_list/AdminsCustomerOrderList';
import Logo from '../../assets/images/OjaMata2.png'
import { useNavigate } from 'react-router-dom';


const NavBarAdmin = ({name}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPickerVisible, setIsPickerVisible] = useState(false)
    const [isCustomerVisible, setIsCustomerVisible] = useState(true)
    const [profile, setProfile] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = useNavigate()
     
    const handlePickers = () => {
        setIsPickerVisible(true)
        setIsCustomerVisible(false)
    }

    const handleCustomer = () => {
        setIsPickerVisible(false)
        setIsCustomerVisible(true)
    }
    const handleProfile = () => {
        setProfile(!profile)
    }
    const handleProfileDetails = () => {
        navigate('/admin/profile')
    }
    const handleOrderManger = () => {
        navigate('/admin/create/orderManager')
    }
    const handleAdmin = () => {
        navigate('/admin/create/admin')
    }
    const handleResetPassword = () => {
        navigate('/resetPassword')
    }

    const handleLogout =() => {
        navigate('/logout')
    }

  return (
    <div>
      <div className='flex items-center justify-center gap-10 py-5 fixed top-0 left-0 w-full bg-white z-[1000] '>
        <div>
          <img className='w-60 mr-24' src={Logo} alt=''/>
        </div>
        <div className='flex items-center gap-20'>
          <div className='relative hidden md:block'>
            <input className='border-2 border-black rounded-lg px-3 py-2 pr-8 bg-green-300 text-black' placeholder='Search' />
            <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
              <FaSearch />
            </div>
          </div>
          <div className='md:hidden'>
            <FaBars size={24} onClick={toggleMenu} />
          </div>
          <div className='hidden md:flex gap-10 text-lg'>
            <p className='hover:cursor-pointer' onClick={handlePickers}>Pickers Order List</p>
            <p className='hover:cursor-pointer' onClick={handleCustomer}>Customers Order List</p>
          </div>
          <div>
            <div onClick={handleProfile}>
                <FaUserCircle size={24}/> 
            </div>
            <p>{name}</p>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white py-3 md:hidden">
            <div className="flex flex-col items-center">
              <div className='relative'>
                <input className='border-2 border-black rounded-lg px-3 py-2 pr-8 bg-white text-green-800' placeholder='Search' />
                <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                  <FaSearch />
                </div>
              </div>
              <div className='flex gap-10 mt-5'>
                <p className='hover:cursor-pointer' onClick={handlePickers}>Pickers Order List</p>
                <p className='hover:cursor-pointer' onClick={handleCustomer}>Customers Order List</p>             
              </div>
            </div>
          </div>
        )}
        {
          profile && (
              <div className='absolute flex flex-col justify-center text-center  top-full right-10 lg:right-60 w-[200px] bg-black text-white py-3 gap-6 '>
                <p className='hover:cursor-pointer' onClick={handleProfileDetails}>Profile Details</p>
                <p className='hover:cursor-pointer' onClick={handleOrderManger}>Add OrderManager</p>
                <p className='hover:cursor-pointer' onClick={handleAdmin}>Add Admin</p>
                <p className='hover:cursor-pointer' onClick={handleResetPassword}>Reset Password</p>
                <p className='hover:cursor-pointer' onClick={handleLogout}>Logout</p>
              </div>
          )
        }
      </div>
      {
        isPickerVisible && (
          <AdminsPickerOrder/>
        )
      }
      {
        isCustomerVisible && (
          <AdminsCustomerOrderList/>
        )
      }
      
    </div>
  )
}

export default NavBarAdmin
