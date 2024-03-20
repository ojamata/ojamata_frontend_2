import React from 'react'
import MakintochGreen from '../../../assets/svg/makintouch.svg'
import MakintochYellow from '../../../assets/svg/makintouchyellow.svg'
import { FaArrowRight } from 'react-icons/fa'

const Ads = () => {
  return (
    <div className=' col-span-1 lg:flex items-center justify-center gap-20  mt-10 md:mt-40'>
      {/* Green Ad */}
      <div className='relative'>
        <img className='w-full' src={MakintochGreen} alt='' />
        <button className='absolute bottom-3 left-3 flex items-center border-2 border-black rounded-lg px-4 py-2 bg-white'>
          Shop More
          <div className='ml-3'>
            <FaArrowRight />
          </div>
        </button>
      </div>
      
      {/* Yellow Ad */}
      <div className='relative lg:mt-0 mt-7'>
        <img className='w-full' src={MakintochYellow} alt='' />
        <button className='absolute bottom-3 left-3 flex items-center border-2 border-black rounded-lg px-4 py-2 bg-white'>
          Shop More
          <div className='ml-3'>
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Ads
