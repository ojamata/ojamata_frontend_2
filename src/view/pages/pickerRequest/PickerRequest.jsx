import React from 'react'
import Logo from '../../../assets/images/OjaMata2.png'
import { FaPlus, FaTrash } from 'react-icons/fa'

const PickerRequest = () => {
  return (
    <div className='flex flex-col ml-40 justify-center pt-20 gap-10'>
        <h2 className='text-2xl '>Add Order(s)</h2>
        <div className='flex  gap-5'>
            <input className='border-2 border-black px-3 py-2' placeholder='Customer id'/>
            <div className='mt-2'>
                <FaTrash size={24} />
            </div>
        </div>

        <button className='flex gap-2 border-2 border-black'>
            <FaPlus/>
            Add another order
        </button>
    </div>
  )
}

export default PickerRequest
