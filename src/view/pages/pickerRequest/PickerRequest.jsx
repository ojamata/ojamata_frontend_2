import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PickerRequest = () => {
  const [orderElements, setOrderElements] = useState([]);
  const [inputCounter, setInputCounter] = useState(0);
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

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

  const apiBaseUrl = 'https://ojamata.onrender.com/api/order-manager/request-picker';

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
  });

  const sendRequest = async () => {
    try {
      const orderList = orderElements.map(order => order.id);
      const data = { orderList, message };
      
      const response = await axiosInstance.post(apiBaseUrl, data);
      console.log('Orders', response.data);
      
      const token = localStorage.getItem("accessToken");
      const decoded = jwtDecode(token);
      console.log('User Data:', decoded);
      
      navigate('/order-manager')
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  useEffect(()=>{
    // Add any necessary cleanup or initialization code here
  }, []);

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
      <input className='border-2 border-black w-fit px-3 py-3 rounded-lg' placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className=' bg-green-800 text-white w-fit px-10 py-5 rounded-lg' onClick={sendRequest}>
        Send Request
      </button>
    </div>
  );
};

export default PickerRequest;
