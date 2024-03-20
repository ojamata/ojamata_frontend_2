import React from 'react'
import Logo from '../../../assets/images/OjaMata2.png'

const Logout = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-40 gap-20'>
      <img className='w-40' src={Logo} alt='logo' />
      <p className=' text-2xl'>Successfully logged out</p>
    </div>
  )
}

export default Logout
