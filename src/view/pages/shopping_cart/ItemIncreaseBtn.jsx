import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const ItemIncreaseBtn = ({quantity}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setItemQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  return (
    <div className='flex'>
      <p className='lg:text-3xl text-2xl'>{itemQuantity}</p>
      <div className='flex flex-col gap-2'>
        <button onClick={increaseQuantity}><FaArrowUp/></button>
        <button onClick={decreaseQuantity}><FaArrowDown/></button>
      </div>
    </div>
  )
}

export default ItemIncreaseBtn
