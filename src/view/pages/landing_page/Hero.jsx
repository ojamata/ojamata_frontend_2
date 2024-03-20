import React from 'react'
import Background from '../../../assets/svg/background.svg'
import Grocery from '../../../assets/svg/groceries.svg'
import Buttons from '../../components/Buttons'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='relative'>
      {/* Background image (hidden on mobile) */}
      <img className='hidden lg:block w-full h-auto' src={Background} alt='' />
      

      {/* Content */}
      <div className='lg:absolute lg:top-40 flex lg:w-[1500px] items-center justify-center gap-20'>
        {/* Grocery image (hidden on mobile) */}
        <img className='hidden lg:block' src={Grocery} alt='' />
        
        <div className=' bg-green-300 lg:bg-transparent px-6 py-8 lg:p-0 lg:mb-0'>
          <h1 className='text-4xl lg:text-6xl text-green-900 mb-6'>Start shopping at your convenience.</h1>
          <p className='text-lg lg:text-2xl font-light mb-6'>Start shopping and save on your time</p>
          <Buttons text='Sign Up' size='25px' textColor='white' backgroundColor='green' />
        </div>

      <img
        className='absolute top-40 left-20 '
        src={Grocery} alt=''/>
    
      <div className='absolute right-80 top-60 w-[500px] '>
        <h1 className=' text-6xl text-green-900 mb-10'>Start shopping at your convenience.</h1>
        <p className=' text-2xl font-light mb-10 '>Start shopping and save on your time</p>
        <Link to={'/signup'}>
          <Buttons  text='Sign Up' size='25px' textColor='white' backgroundColor='green' />
        </Link>
        
      </div>
    </div>

  )
}

export default Hero
