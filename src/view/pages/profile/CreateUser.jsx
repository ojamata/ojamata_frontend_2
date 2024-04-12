import  axios  from 'axios';
import React, { useState } from 'react'

const CreateUser = ({role}) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password:'',
        address: '',
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions to update user data (e.g., API call)
        console.log('Updated user data:', userData);
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
          ...prevUserData,
          [name]: value
        }));
      };
    const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);
    const apiBaseUrl = 'https://crab-desired-wildly.ngrok-free.app/api/admin/create'

    const accessToken = localStorage.getItem('accessToken');
    console.log('Access Token:', accessToken);
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  });

  const addUser = async () => {
    try {
      const response = null;
      if(role === 'Admin'){
        response = await axiosInstance.post(apiBaseUrl + '/admin', userData);
      }
      if(role === 'Order Manager'){
        response = await axiosInstance.post(apiBaseUrl + '/order-manager', userData);
      }
      console.log('User registration successful:', response.data);

    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create {capitalizedRole}</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input 
            type="text" 
            id="name" 
            name="firstName"  
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}  
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input 
            type="text" 
            id="name" 
            name="lastName"  
            value={userData.lastName}
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} 
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"  
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="text" 
            id="password" 
            name="password"  
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="phone" 
            id="phone" 
            name="phoneNumber"  
            value={userData.phoneNumber}
            onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} 
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" 
          />
        </div>
        {/* Add more input fields for other user data */}
        <button 
          type="submit"
          onClick={addUser}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default CreateUser
