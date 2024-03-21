import React, { useState } from 'react'
import Logo from '../../assets/images/OjaMata2.png'
import {FaSearch, FaBars, FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import About from '../pages/about_page/About';
import PickerOrderPage from '../pages/order_page/PickerOrderPage';
import Notification from '../pages/notification/Notification';

const NavBarPlain = ({name}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPickUpsVisible, setIsPickUpsVisible] = useState(true)
    const [isHomeVisible, setIsHomeVisible] = useState(false)
    const [isNotificationVisible, setIsNotificationVisible] = useState(false)
    const [profile, setProfile] = useState(false)


    const navigate = useNavigate()

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const handleHome = () => {
      setIsHomeVisible(true)
      setIsPickUpsVisible(false)
      setIsNotificationVisible(false)
    }
    
   
    const handlePickUps = () => {
      setIsPickUpsVisible(true)
      setIsHomeVisible(false)
      setIsNotificationVisible(false)
    }

    const handleNotification = () => {
      setIsPickUpsVisible(false)
      setIsHomeVisible(false)
      setIsNotificationVisible(true)
    }

    const handleProfile = () => {
      setProfile(!profile)
    }
    
    const handleProfileDetails = () => {
      navigate('/picker/profile')
    }

    const handleVerification = () => {
      navigate('/picker/verification')
    }

    const addPaymentInfo = () => {
      navigate('/picker/addPaymentInfo')
    }

    const handleLogout = () => {
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
            <p className='hover:cursor-pointer' onClick={handleHome}>Home</p>
            <p className='hover:cursor-pointer' onClick={handlePickUps}>Pick-Up History</p>
            <p className='hover:cursor-pointer' onClick={handleNotification}>Notifications</p>
          </div>
          <div>
            <div onClick={handleProfile} className=''>
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
                <p className='hover:cursor-pointer' onClick={handleHome}>Home</p>
                <p className='hover:cursor-pointer' onClick={handlePickUps}>Pick-Up History</p>
                <p className='hover:cursor-pointer' onClick={handleNotification}>Notifications</p>              
              </div>
            </div>
          </div>
        )}
        {
          profile && (
            <div className='absolute flex flex-col top-full right-0 lg:right-60 bg-black text-white py-3 w-[200px] text-center gap-6 '>
              <p className='hover:cursor-pointer' onClick={handleProfileDetails}>Profile Details</p>
              <p className='hover:cursor-pointer' onClick={handleVerification}>Add Verification Info</p>
              <p className='hover:cursor-pointer' onClick={addPaymentInfo}>Add Payment Info</p>
              <p className='hover:cursor-pointer' onClick={handleLogout}>Logout</p>

            </div>
          )
        }
      </div>
      {
        isPickUpsVisible && (
          <PickerOrderPage/>
          )
        }
        {
          isHomeVisible && (
            <About/>
          )
        }
        {
          isNotificationVisible && (
            <Notification/>
          )
        }
    </div>
    
  )
}

export default NavBarPlain
