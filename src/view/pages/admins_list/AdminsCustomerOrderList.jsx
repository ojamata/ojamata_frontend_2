import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AdminsCustomerOrderList = () => {
    const [orders, setOrders] = useState([])
    const [userData, setUserData] = useState({
      firstName: '',
      email: ''
    })


  const apiBaseUrl = 'https://ojamata.onrender.com/api/customer/get-all-orders'

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      
    }
  });

  const getOrderHistory = async () => {
    try {
      const response = await axiosInstance.get(apiBaseUrl);
      console.log('Orders', response.data);
      setOrders(response.data)
       const token = localStorage.getItem("accessToken")
       const decoded = jwtDecode(token)
       setUserData({firstName: decoded.firstName, email: decoded.email})

      
    } catch (error) {
      console.error('Error getting pickers', error);
    }
  };

  useEffect(()=>{
     getOrderHistory()
    
  }, [])

        
      
  return (
    <div className="container mx-auto lg:px-4 px-1 py-8 pt-40">
      <div className='flex gap-6'>
        <h1 className="text-3xl font-bold mb-4">Customers Orders</h1>
      </div>

      {/* Order Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse  w-full">
          <thead>
            <tr>
              <th className=" px-4 py-2">Order ID</th>
              <th className=" px-4 py-2">Name</th>
              <th className=" px-4 py-2">Email</th>
              <th className=" px-4 py-2">Date Ordered</th>
              <th className=" px-4 py-2">Total Amount</th>
              <th className=" px-4 py-2">Order Status</th>
              <th className=" px-4 py-2">Date Delivered</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border border-green-500 px-4 py-4">{order.id}</td>
                <td className="border border-green-500 px-4 py-4">{userData.firstName}</td>
                <td className="border border-green-500 px-4 py-4">{userData.email}</td>
                <td className="border border-green-500 px-4 py-2">{order.orderedDate}</td>
                <td className="border border-green-500 px-4 py-2">₦ {order.totalPrice}</td>
                <td className="border border-green-500 px-4 py-2">{order.orderStatus}</td>
                <td className="border border-green-500 px-4 py-2">{order.deliveredDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminsCustomerOrderList
