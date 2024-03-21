
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/OjaMata2.png'
import {FaSearch, FaHome, FaBars, FaUserCircle} from 'react-icons/fa'
import ShoppingCartIcon from './ShoppingCartIcon';
import { useNavigate } from 'react-router-dom';

const NavBarWithoutLogin = ({name}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [cartLength, setCartLength] = useState(0);
    const navigate = useNavigate()

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const handleShoppingCartNavigate = () => {
      navigate('/shopping-cart')
    }
    
    const handleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleProfileUpdate = () => {
    navigate('/customer/profile');
  };

  const handleResetPassword = () => {
    navigate('/customer/resetpassword');
  };

  const handleAddress = () => {
    navigate('/customer/address');
  };

  const handleOrderHistory = () => {
    navigate('/customer/orderhistory');
  };

  const handleLogout = () => {
    navigate('/logout');
  };


    const getLength = () => {
      const storedCartItems = localStorage.getItem('cartItems');
      if(storedCartItems){
        const parsedCartItems = JSON.parse(storedCartItems);
        setCartLength(parsedCartItems.length)
      }
      
    }
    useEffect(()=> {
      getLength();
    },[])
    return (
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
          <div className='hidden md:flex gap-10'>
            <FaHome size={24}  />
            <div onClick={handleShoppingCartNavigate}>
              <ShoppingCartIcon cartSize={cartLength} />
            </div>
          </div>
        </div>
        <div onClick={handleProfile}>
          <FaUserCircle size={24} />
          <p>{name}</p>
        </div>
        {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-black text-white py-3 md:hidden'>
          <div className='flex flex-col items-center'>
            <div className='relative'>
              <input
                className='border-2 border-black rounded-lg px-3 py-2 pr-8 bg-white text-green-800'
                placeholder='Search'
              />
              <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                <FaSearch />
              </div>
            </div>
            <div className='flex gap-10 mt-5'>
              <FaHome size={24} />
              <ShoppingCartIcon />
              
            </div>
          </div>
        </div>
      )}
      {profileOpen && (
                <div className='absolute flex flex-col justify-center text-center top-full right-0 lg:right-96 w-[200px] bg-black text-white py-3 gap-6'>
                  <p className='hover:cursor-pointer' onClick={handleProfileUpdate}>
                    Profile Details
                  </p>
                  <p className='hover:cursor-pointer' onClick={handleAddress}>
                    Add Address
                  </p>
                  <p className='hover:cursor-pointer' onClick={handleResetPassword}>
                    Reset Password
                  </p>
                  <p className='hover:cursor-pointer' onClick={handleOrderHistory}>
                    Order History
                  </p>
                  <p className='hover:cursor-pointer' onClick={handleLogout}>
                    Logout
                  </p>
                </div>
              )}
      </div>
    
  );
};

export default NavBarWithoutLogin;

