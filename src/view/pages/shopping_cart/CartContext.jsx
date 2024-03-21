// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter((item) => item.id !== itemId));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}> {/* Ensure that addToCart is included in the context value */}
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
