import React, { useState } from 'react';

const PickersAssignedOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', phoneNumber: '123-456-7890', address: '123 Main St', deliveryStatus: 'pending' },
    { id: 2, customerName: 'Jane Smith', phoneNumber: '987-654-3210', address: '456 Oak Ave', deliveryStatus: 'pending' },
    // Add more sample orders as needed
  ]);

  const handleArrival = (orderId) => {
    const otp = generateOTP();
    alert(`OTP sent to customer: ${otp}`);

    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, deliveryStatus: 'arrived' };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Orders for Delivery</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.deliveryStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.deliveryStatus === 'pending' ? (
                    <button onClick={() => handleArrival(order.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      I have arrived
                    </button>
                  ) : (
                    <span className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Fulfilled
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PickersAssignedOrders;
