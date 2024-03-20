import React from 'react'
import { footerData } from '../../data/footerData'
import { FaArrowRight, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  const year = () =>{
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <div>
      <div className=' col-span-1 lg:flex  justify-center gap-60 px-10 pt-[120px] '>
        <div className='flex justify-center lg:gap-20 gap-10'>
          {footerData.map((item, index) => (
            <div className='' key={index}>
              <h3 className='text-xl mb-4'>{item.title}</h3>
              <div className='flex flex-col gap-5'>
                {item.links.map((subItems, idx) => (
                  <a className=' text-lg' key={idx} href={subItems.link}>{subItems.text}</a>
                ))}
              </div>
              
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-xl font-bold'>Payments</h3>
            <img className=' w-96' src='https://iresearchng.com/images/paystack.png' alt='payment mediums'/>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-xl font-bold'>Contacts</h3>
            <div className='relative'>
              <input className='border-2 border-black rounded-lg px-3 py-2 pr-8 text-black' placeholder='Email Address' />
              <div className='absolute inset-y-0 right-24 flex items-center lg:px-2 px-4 pointer-events-none'>
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-xl font-bold'>Follow us on</h3>
            <div className='flex gap-10'>
              <FaFacebookSquare size={32} color='green'/>
              <FaInstagramSquare size={32} color='green'/>
              <FaTwitterSquare size={32} color='green'/>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex items-center justify-center text-xl mt-10 bg-black text-white py-7'>
        <p>Copyright © <span className=' text-green-700'>OjaMata</span>.  {year()} All Right Reserved.</p>
      </div>
    </div>
    
  )
}

export default Footer
