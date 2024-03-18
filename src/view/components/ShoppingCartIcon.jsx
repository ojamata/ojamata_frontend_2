import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCartIcon() {
  const [itemCount, setItemCount] = useState(0);

  const addItemToCart = () => {
    setItemCount(itemCount + 1);
    // Add other logic here as needed, such as updating the cart state
  };

  return (
    <div className='flex relative'>
      {/* <button onClick={addItemToCart}>Add to Cart</button> */}
      <FaShoppingCart size={24} />
      <p className='absolute top-0 left-5 mt-[-7px]  ml-1'>{itemCount}</p>
    </div>
  );
}

export default ShoppingCartIcon;
