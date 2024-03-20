import React from 'react'

const PickerOrderPage = () => {
    const orders = [
        { id: 1, dateDelivered: '2024-03-18', price: 25.99, status: 'DELIVERED' },
        { id: 2, dateDelivered: '2024-03-17', price: 32.50, status: 'DELIVERED' },
        { id: 3, dateDelivered: '2024-03-16', price: 15.75, status: 'PENDING' },
        // Add more orders as needed
      ];
  return (
    <div className="flex flex-col pt-40 overflow-x-auto gap-10 px-3">            
            <p className='text-2xl font-bold'>Your Pickups</p>
            <table className="table-auto border-collapse  w-full">
              <thead>
                <tr>
                  <th className=" px-4 py-2">Pickup ID</th>
                  <th className=" px-4 py-2">Date Delivered</th>
                  <th className=" px-4 py-2">Amount Paid</th>
                  <th className=" px-4 py-2">Order Status</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td className="border border-green-500 px-4 py-4">{order.id}</td>
                    <td className="border border-green-500 px-4 py-2">{order.dateDelivered}</td>
                    <td className="border border-green-500 px-4 py-2">₦{order.price.toFixed(2)}</td>
                    <td className="border border-green-500 px-4 py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}

export default PickerOrderPage
