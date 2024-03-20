import React, { useState } from 'react'
import ItemIncreaseBtn from './ItemIncreaseBtn'
import { FaArrowLeft, FaArrowRight, FaTrash } from 'react-icons/fa'
import Visa from '../../../assets/svg/visa.svg'
import MasterCard from '../../../assets/svg/mastercard.svg'
import { useNavigate } from 'react-router-dom'

const ShoppingItem = ({itemName, quantity, price}) => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)

  const handleNavigate = () => {
    navigate('/customer')
  }

  const handleDelete = () => {
    setIsVisible(false)
  }
  return (
    <div className='lg:flex col-span-1 lg:px-0 px-10 justify-center gap-[200px] mt-10 '>
      <div className='mb-10'>
        <div className='flex gap-10 mb-5 mt-10'>
          <div className='mt-2' onClick={handleNavigate}>
            <FaArrowLeft/>
          </div>
          <p className='text-3xl'>Shopping Continue</p>
        </div>
        <div>
          <hr/>
        </div>
        <div className='flex flex-col gap-3 mt-5'>
          <p className='lg:text-3xl text-2xl'>Shopping Cart</p>
          <p className='lg:text-3xl text-2xl'>You have {} item in your shopping cart</p>
        </div>
        <div>
          {isVisible && (
            <div className='flex  lg:gap-40 gap-10 border-2 lg:w-[900px] px-4 py-7 rounded-lg shadow-black mt-5'>
              <p className=' lg:text-3xl text-2xl'>Pepper</p>
              <ItemIncreaseBtn quantity={5}/>
              <p className='lg:text-3xl text-2xl'>₦5000</p>
              <div>
                <div className='mt-2' onClick={handleDelete}>
                  <FaTrash />
                </div>
              </div>
            </div>
          )}
        </div>
        
      </div>
        
      <div className='flex flex-col items-center justify-center gap-12 bg-green-300 lg:w-[600px] py-20 rounded-lg'>
        <p className='text-3xl'>Payment Details</p>
        <div className='lg:text-3xl text-2xl flex lg:gap-60 gap-20'>
          <p>Subtotal</p>
          <p>₦{}0</p>
        </div>
        <div className='lg:text-3xl text-2xl flex lg:gap-60 gap-20'>
          <p>Shipping</p>
          <p>₦{}0</p>
        </div>
        <div className='lg:text-3xl text-2xl flex lg:gap-40 gap-10'>
          <p>Total(Tax incl.)</p>
          <p>₦{}0</p>
        </div>
        <div className='lg:text-3xl text-2xl flex lg:gap-60 gap-20  bg-green-800 text-white px-6 py-4 rounded-lg'>
          <p>0.00</p>
          <div className='flex gap-2'>
            <p>Checkout</p>
            <FaArrowRight/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ShoppingItem
