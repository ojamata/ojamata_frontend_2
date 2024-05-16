import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemIncreaseBtn from '../shopping_cart/ItemIncreaseBtn';
import axios from 'axios';

const ExploreCategoriesWithAddToCart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItem, setAddedItem] = useState(null); // Added item state


  


  
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    const apiBaseUrl = 'https://ojamata.onrender.com/api/item/get-all';

    const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 5000,
      crossdomain: true,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')  
      }
    });
    const fetchItems = async () => {
      try {
        const response = await axiosInstance.post();
        setItems(response.data);
        localStorage.setItem('allItems', JSON.stringify(response.data))
        console.log(items);
        setFilteredItems(response.data); // Initialize filtered items with all items
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems()
  }, []);




  const handleAddToCart = (itemName) => {
    if (!items) return; // Check if items are loaded
    const itemToAdd = items.find((item) => item.name === itemName);
    if (itemToAdd) {
      const isItemInCart = cartItems.some((item) => item.name === itemName);
      if (isItemInCart) {
        alert(`${itemName} is already in the cart`);
        return; // Exit early if item is already in the cart
      }
      console.log(itemToAdd);
      const updatedCartItems = [...cartItems, { name: itemToAdd.name, price: itemToAdd.price, quantity: itemToAdd.quantity }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setAddedItem(itemName); // Update added item state
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
          {['All', 'VEGETABLES', 'FRUITS', 'FROZEN_FOOD', 'GRAINS', 'FRESH_FISH_OR_MEAT'].map((category, index) => (
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
        {/* Check if filteredItems is empty */}
        {filteredItems.length === 0 ? (
          <div>No items found for {selectedCategory}</div>
        ) : (
          // Map over filteredItems and render each item
          filteredItems.map((item, index) => (
            <div className='flex flex-col gap-5 items-center justify-center' key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* Pass item name to handleAddToCart */}
              <button 
                className='bg-green-800 px-4 py-2 text-white rounded-lg' 
                onClick={() => handleAddToCart(item.name)}
              >
                Add to Cart
              </button>
              {addedItem === item.name && <p className=' text-green-900 font-bold'>Added</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreCategoriesWithAddToCart;
