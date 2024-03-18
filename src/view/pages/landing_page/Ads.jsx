import React from 'react'
import MakintochGreen from '../../../assets/svg/makintouch.svg'
import MakintochYellow from '../../../assets/svg/makintouchyellow.svg'
import { FaArrowRight } from 'react-icons/fa'

const Ads = () => {
  return (
    <div className='flex justify-center gap-40 mt-40'>
      <div className=''>
        <img className='relative' src={MakintochGreen} alt=''/>
        <button className='absolute top-[1200px] ml-7 flex border-2 border-black rounded-lg px-4 py-2 bg-white'>
            Shop More
            <div className='ml-3 mt-1'>
                <FaArrowRight/>
            </div>
        </button>
      </div>
      <div>
        <img className='relative' src={MakintochYellow} alt=''/>
        <button className='absolute top-[1200px] ml-7 flex border-2 border-black rounded-lg px-4 py-2 bg-white'>
            Shop More
            <div className='ml-3 mt-1'>
                <FaArrowRight/>
            </div>
        </button>
      </div>
    </div>
  )
}

export default Ads
