import React from 'react'
import Logo from '../../assets/images/OjaMata2.png'

const Response = ({text}) => {
  return (
    <div className='flex flex-col items-center justify-center pt-20 gap-10'>
      <img className='w-[200px]' src={Logo} alt='logo'/>
      <p className=' text-2xl'>{text}</p>
    </div>
  )
}

export default Response
