import React from 'react'
import Background from '../../../assets/svg/background.svg'
import Grocery from '../../../assets/svg/groceries.svg'
import Buttons from '../../components/Buttons'


const Hero = () => {
  return (
    <div className=''>
      <img
        className=' w-full relative'
        src={Background} alt=''/>
      
      <img
        className='absolute top-40 left-20 '
        src={Grocery} alt=''/>
    
      <div className='absolute right-80 top-60 w-[500px] '>
        <h1 className=' text-6xl text-green-900 mb-10'>Start shopping at your convenience.</h1>
        <p className=' text-2xl font-light mb-10 '>Start shopping and save on your time</p>
        <Buttons  text='Sign Up' size='25px' textColor='white' backgroundColor='green' />
      </div>

    </div>
  )
}

export default Hero
