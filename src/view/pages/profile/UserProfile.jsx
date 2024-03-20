import React, { useEffect, useState } from 'react'

const UserProfile = () => {
  // Sample user data (initial state)
  const [userData, setUserData] = useState({
    id: 1,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    // Add more user data fields as needed
  });

  // Function to fetch user data (you can replace this with your actual data fetching logic)
  const fetchUserData = () => {
    // Simulated API call or fetching from local storage
    const userDataFromAPI = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phoneNumber: '08138112782',
      address: '123 Main St',
      // Add more user data fields as needed
    };
    setUserData(userDataFromAPI);
  };

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  // Function to handle form submission (updating user data)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions to update user data (e.g., API call)
    console.log('Updated user data:', userData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="name" name="firstName" value={userData.firstName} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="name" name="lastName" value={userData.lastName} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="phone" id="email" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea id="address" name="address" value={userData.address} onChange={handleInputChange} rows="3" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-5 py-3"></textarea>
        </div>
        {/* Add more input fields for other user data */}
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
      </form>
    </div>
  );
}

export default UserProfile
