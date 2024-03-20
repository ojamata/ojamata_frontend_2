import React from 'react'
import { useNavigate } from 'react-router-dom'
import { items } from '../../../data/items'

const ExploreCategoriesWithAddToCart = () => {
    const navigate = useNavigate()

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const allFunction = () => {
        return items;
    }
    const allSpecifics = (category) => {
        const theSpecified = []
        for (let index = 0; index < items.length; index++) {
            if(items[index].category === category) theSpecified.push(items[index]) 
        }
        return theSpecified
    }

    const all = () => {
      setSelectedCategory('All');
      setShowDropdown(false);
  };

  const specifics = (category) => {
      setSelectedCategory(category);
      setShowDropdown(false);
  };

  const handleToggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };

  const handleItemClick = (category) => {
      setSelectedCategory(category);
      setShowDropdown(false); // Close the dropdown after selecting
  };
    
  return (
    <div className='mt-20'>
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
            <button className=' text-xl hover:text-green-800' onClick={allFunction}>All</button>
            <button className=' text-xl hover:text-green-800' onClick={allSpecifics('Vegetables')}>Vegetables</button>
            <button className=' text-xl hover:text-green-800' onClick={allSpecifics('Fruits')}>Fruits</button>
            <button className=' text-xl hover:text-green-800' onClick={allSpecifics('Frozen Food')}>Frozen Food</button>
            <button className=' text-xl hover:text-green-800' onClick={allSpecifics('Grains')}>Grains</button>
            <button className=' text-xl hover:text-green-800' onClick={allSpecifics('Fresh Fish & Meat')}>Fresh Meat & Fresh Fish</button>


        </div>
      </div>
    </div>
  )
}

export default ExploreCategoriesWithAddToCart
