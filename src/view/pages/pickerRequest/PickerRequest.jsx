import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';


const PickerRequest = () => {
  const [orderElements, setOrderElements] = useState([]);
  const [inputCounter, setInputCounter] = useState(0);

  const handleAdd = () => {
    setInputCounter(prevCounter => prevCounter + 1);
    const newOrderElement = {
      id: inputCounter,
      content: (
        <div className='flex gap-5' key={inputCounter}>
          <input className='border-2 border-black px-3 py-2' placeholder='Order id' />
          <div className='mt-2' onClick={() => handleDelete(inputCounter)}>
            <FaTrash size={24} />
          </div>
        </div>
      )
    };

    setOrderElements(prevElements => [...prevElements, newOrderElement]);
  };

  const handleDelete = (id) => {
    setOrderElements(prevElements => prevElements.filter(order => order.id !== id));
  };

  return (
    <div className='flex flex-col ml-10 lg:ml-40 justify-center pt-20 gap-10'>
      <h2 className='text-2xl'>Add Order(s)</h2>
      {orderElements.map(order => (
        <div key={order.id}>{order.content}</div>
      ))}
      <button className='flex gap-2 border-2 border-black w-fit px-7 py-3 rounded-lg bg-green-800 text-white' onClick={handleAdd}>
        <FaPlus />
        Add another order
      </button>
      <input className='border-2 border-black w-fit px-3 py-3 rounded-lg' placeholder='Enter your message'/>
      <button className=' bg-green-800 text-white w-fit px-10 py-5 rounded-lg'>
        Send Request
      </button>
    </div>
  );
};

export default PickerRequest;
