import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ItemIncreaseBtn = ({ quantity, onQuantityChange }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const increaseQuantity = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onQuantityChange(newQuantity); // Notify parent component about quantity change
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onQuantityChange(newQuantity); // Notify parent component about quantity change
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
  );
};

export default ItemIncreaseBtn;
