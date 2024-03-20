import React, { useState } from 'react'
import Logo from '../../assets/images/OjaMata2.png'
import {FaSearch, FaHome, FaBars} from 'react-icons/fa'
import Buttons from './Buttons';
import ShoppingCartIcon from './ShoppingCartIcon';
import { Link } from 'react-router-dom';

const NavBarWithLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
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
          <ShoppingCartIcon/>
        </div>
        <div className='hidden md:flex gap-10'>
          <Link to='/signup'>
            <Buttons text='Register' />
          </Link>
         
          <Link to='/login'>
            <Buttons text='Login' textColor='white' backgroundColor='green'/>
          </Link>
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
              <FaHome size={24}  />
              <ShoppingCartIcon/>
            </div>
            <div className='flex gap-10 mt-5'>
            <Link to='/signup'>
              <Buttons text='Register' backgroundColor='white'  />
            </Link>
            <Link to='/login'>
              <Buttons text='Login' textColor='white' backgroundColor='green' />
            </Link>    
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBarWithLogin
