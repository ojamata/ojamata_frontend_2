import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {items}  from '../../../data/items';
import ItemIncreaseBtn from '../shopping_cart/ItemIncreaseBtn';

const ExploreCategoriesWithAddToCart = () => {
  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState(items);
  const [cartItems, setCartItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');


  
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);




  const handleAddToCart = (itemName) => {
    const itemToAdd = items.find((item) => item.itemName === itemName);
    if (itemToAdd) {
      const isItemInCart = cartItems.some((item) => item.itemName === itemName);
      if (isItemInCart) {
        alert(`${itemName} is already in the cart`);
        return; // Exit early if item is already in the cart
      }
      const updatedCartItems = [...cartItems, { itemName: itemToAdd.itemName, price: itemToAdd.price, quantity: itemToAdd.quantity }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false); // Close the dropdown after selecting

    // Filter items based on category
    if (category === 'All') {
      setFilteredItems(items); // Show all items
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };


  return (
    <div className='flex flex-col items-center mt-20 lg:pl-20 pl-5'>
      <div className='flex items-center justify-center gap-40'>
        <h3 className=' text-3xl mr-10'>Explore Categories</h3>
        <div className='relative'>
          <button
            className='text-xl hover:text-green-800 lg:hidden'
            onClick={handleToggleDropdown}>
            {selectedCategory}
          </button>
          {showDropdown && (
            <div className='absolute z-10 top-full left-0 bg-white shadow-md rounded-md overflow-hidden'>
              {['All', 'Vegetables', 'Fruits', 'Frozen Food', 'Grains', 'Fresh Meat & Fish'].map(
                (category, index) => (
                  <button
                    key={index}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-100'
                    onClick={() => handleItemClick(category)}>
                    {category}
                  </button>
                )
              )}
            </div>
          )}
        </div>
        <div className='hidden lg:flex gap-6 right-10'>
          {['All', 'Vegetables', 'Fruits', 'Frozen Food', 'Grains', 'Fresh Meat & Fish'].map((category, index) => (
            <button
              key={index}
              className='text-xl hover:text-green-800'
              onClick={() => handleItemClick(category)}>
              {category}
            </button>
          ))}
        </div>
        
      </div>
      <div className='grid grid-cols-4 gap-6 lg:gap-x-60 mt-10 items-center justify-center'>
      {filteredItems.length === 0 ? (
            <div>No items found for {selectedCategory}</div>
          ) : (
            filteredItems.map((item) => (
              <div className='flex flex-col gap-5 items-center justify-center' key={item.id}>
                <p>{item.itemName}</p>
                <p>{item.price}</p>
                <button className=' bg-green-800 px-4 py-2 text-white rounded-lg' onClick={() => handleAddToCart(item.itemName)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
    </div>
  );
};

export default ExploreCategoriesWithAddToCart;
