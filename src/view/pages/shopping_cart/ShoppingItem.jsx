import React, { useEffect, useState } from 'react'
import ItemIncreaseBtn from './ItemIncreaseBtn'
import { FaArrowLeft, FaArrowRight, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ShoppingItem = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]); // Initialize as an array

  const handleNavigate = () => {
    navigate('/customer')
  }

  const handleDeleteClick = (index) => {
    const updatedCartItems = [...cartItem];
    updatedCartItems.splice(index, 1);
    setCartItem(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const getItemsForCart = () => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      const itemsWithQuantity = parsedItems.map(item => ({ ...item, quantity: 1 }));
      setCartItem(itemsWithQuantity);
    }
  };

  useEffect(() => {
    getItemsForCart();
  }, []);

  useEffect(() => {
    const updatedTotalPrices = cartItem.map(item => item.price * item.quantity);
    setTotalPrice(updatedTotalPrices);
  }, [cartItem]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItem];
    updatedCartItems[index].quantity = newQuantity;
    setCartItem(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    const updatedTotalPrices = [...totalPrice];
    updatedTotalPrices[index] = updatedCartItems[index].price * newQuantity;
    setTotalPrice(updatedTotalPrices);
  };
  const subtotal = totalPrice.reduce((acc, curr) => acc + curr, 0);
  const shipping = 0; // Assuming no shipping charge for now
  const tax = 0; // Assuming no tax for now
  const total = subtotal + shipping + tax;

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
          <p className='lg:text-3xl text-2xl'>You have {cartItem.length} item in your shopping cart</p>
        </div>
        <div>
          {isVisible && cartItem.map((item, index) => (
            <div key={index} className='flex  lg:gap-40 gap-10 border-2 lg:w-[900px] px-4 py-7 rounded-lg shadow-black mt-5'>
              <p className=' lg:text-3xl text-2xl'>{item.itemName}</p>
              <ItemIncreaseBtn quantity={item.quantity} onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)} />
              <p className='lg:text-3xl text-2xl'>₦{item.price}</p>
              <p className='lg:text-3xl text-2xl'>₦{totalPrice[index]}</p> {/* Access total price by index */}
              <div>
                <div className='mt-2' onClick={() => handleDeleteClick(index)}>
                  <FaTrash />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
        
      <div className='flex flex-col items-center justify-center gap-12 bg-green-300 lg:w-[600px] py-20 rounded-lg'>
        <p className='text-3xl'>Payment Details</p>
        <div className='lg:text-3xl text-2xl flex lg:gap-60 gap-20'>
          <p>Subtotal</p>
          <p>₦{subtotal}</p>
        </div>
        <div className='lg:text-3xl text-2xl flex lg:gap-60 gap-20'>
          <p>Shipping</p>
          <p>₦{shipping}</p>
        </div>
        <div className='lg:text-3xl text-2xl flex lg:gap-40 gap-10'>
          <p>Total(Tax incl.)</p>
          <p>₦{tax}</p>
        </div>
        <div className='lg:text-3xl text-2xl flex lg:gap-60 gap-20  bg-green-800 text-white px-6 py-4 rounded-lg'>
          <p>{total}</p>
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

// import React from 'react';
// import { useCart } from './CartContext';

// const ShoppingItem = ({ itemName, quantity, price }) => {
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     addToCart({ itemName, quantity, price });
//   };

//   return (
//     <div>
//       <p>{itemName}</p>
//       <p>{quantity}</p>
//       <p>{price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ShoppingItem;

