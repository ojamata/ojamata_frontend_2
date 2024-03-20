import React from 'react'


const AdminsCustomerOrderList = () => {
    const orders = [
        { id: 1,name: 'Eddie', email: 'a@gamil', phone: '0987678', date: '2024-03-18', total: 25.99, status: 'PENDING' },
        { id: 2,name: 'Eddie', email: 'a@gamil', phone: '0987678', date: '2024-03-17', total: 32.50, status: 'DELIVERED', dateDelivered: '2024-03-18' },
        { id: 3,name: 'Eddie', email: 'a@gamil', phone: '0987678', date: '2024-03-16', total: 15.75, status: 'PENDING' },
        // Add more orders as needed
      ];
        
      
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
              <th className=" px-4 py-2">Phone Number</th>
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
                <td className="border border-green-500 px-4 py-2">{order.name}</td>
                <td className="border border-green-500 px-4 py-2">{order.email}</td>
                <td className="border border-green-500 px-4 py-2">{order.phone}</td>
                <td className="border border-green-500 px-4 py-2">{order.date}</td>
                <td className="border border-green-500 px-4 py-2">₦{order.total.toFixed(2)}</td>
                <td className="border border-green-500 px-4 py-2">{order.status}</td>
                <td className="border border-green-500 px-4 py-2">{order.dateDelivered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminsCustomerOrderList
