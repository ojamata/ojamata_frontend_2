import React, { useState } from 'react'
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa'
import Logo from '../../assets/images/OjaMata2.png'
import AdminsCustomerOrderList from '../pages/admins_list/AdminsCustomerOrderList';
import AdminsPickerOrder from '../pages/admins_list/AdminsPickerOrder';
import { useNavigate } from 'react-router-dom';


const NavBarOrderManger = ({name}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPickerVisible, setIsPickerVisible] = useState(false)
    const [isCustomerVisible, setIsCustomerVisible] = useState(true)
    const [profile, setProfile] = useState(false)

    const navigate = useNavigate()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

      
     
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
      const handleProfileUpdate = () => {
        navigate('/orderManager/profile')
      }
      const handleRequestPicker = () => {
        navigate('/orderManager/picker/request')
      }
      
      const handleLogout = () => {
        navigate('/logout')
      }

  return (
    <div>
      <div className='flex items-center justify-center gap-10 py-5 fixed top-0 left-0 w-full bg-white z-[1000] px-5 '>
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
            <p  onClick={handlePickers}>Pickers Order List</p>
            <p onClick={handleCustomer}>Customers Order List</p>
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
                <p onClick={handlePickers}>Pickers Order List</p>
                <p onClick={handleCustomer}>Customers Order List</p>             
              </div>
            </div>
          </div>
        )}
        {
          profile && (
            <div className='flex flex-col absolute top-full right-0 lg:right-60 w-[200px] bg-black text-white py-3 text-center gap-5'>
              <p className='hover:cursor-pointer' onClick={handleProfileUpdate}>Profile</p>
              <p className='hover:cursor-pointer' onClick={handleRequestPicker}>Request for Picker</p>
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

export default NavBarOrderManger
