import React from 'react'
import { useNavigate } from 'react-router-dom'
import { items } from '../../../data/items'

const ExploreCategories = () => {
    const navigate = useNavigate()

    const all = () => {
        return items;
    }
    const specifics = (category) => {
        const theSpecified = []
        for (let index = 0; index < items.length; index++) {
            if(items[index].category === category) theSpecified.push(items[index]) 
        }
        return theSpecified
    }
    
  return (
    <div className='mt-20'>
      <div className='flex items-center justify-center gap-40'>
        <h3 className=' text-3xl mr-10'>Explore Categories</h3>
        <div className='flex gap-6 right-10'>
            <button className=' text-xl hover:text-green-800' onClick={all}>All</button>
            <button className=' text-xl hover:text-green-800' onClick={specifics('Vegetables')}>Vegetables</button>
            <button className=' text-xl hover:text-green-800' onClick={specifics('Fruits')}>Fruits</button>
            <button className=' text-xl hover:text-green-800' onClick={specifics('Frozen Food')}>Frozen Food</button>
            <button className=' text-xl hover:text-green-800' onClick={specifics('Grains')}>Grains</button>
            <button className=' text-xl hover:text-green-800' onClick={specifics('Fresh Fish & Meat')}>Fresh Meat & Fresh Fish</button>


        </div>
      </div>
    </div>
  )
}

export default ExploreCategories
