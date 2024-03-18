import React from 'react'
import Background from '../../../assets/svg/background2.svg'
import Download from '../../../assets/svg/download.svg'
import Cart from '../../../assets/svg/iphoneCart.svg'
import Profile from '../../../assets/svg/iphoneProfile.svg'


const MobileApp = () => {
  return (
    <div className='pt-20'>
        <img className='relative w-full  ' src={Background}  alt=''/>
        <div className='absolute top-[1900px] left-[200px] '>
            <div className='flex flex-col w-[600px] gap-10 '>
                <p className=' text-7xl text-green-950'>Shop Faster with OjaMata App</p>
                <p className=' text-2xl font-extralight'>Soon on both IOS and Android</p>
            </div>
            <div className=' mt-20'>
                <img src={Download} alt=''/>
            </div>
        </div>
        <div className='flex absolute top-[1800px] right-[200px] '>
            <img  src={Profile} alt=''/>
            <img className='ml-[-30px]' src={Cart} alt=''/>
        </div>
    </div>
  )
}

export default MobileApp
