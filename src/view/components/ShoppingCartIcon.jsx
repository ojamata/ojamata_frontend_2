import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCartIcon({cartSize}) {
  

  return (
    <div className='flex relative'>
      {/* <button onClick={addItemToCart}>Add to Cart</button> */}
      <FaShoppingCart size={24} />
      <p className='absolute top-0 left-5 mt-[-7px]  ml-1'>{cartSize}</p>
    </div>
  );
}

export default ShoppingCartIcon;
