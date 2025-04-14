'use client';

import React, { useState } from 'react';

interface Order {
  id: number;
  platform: string;
  customerName: string;
  status: string;
  date: string;
}

const dummyOrders: Order[] = [
  { id: 1, platform: 'Web', customerName: 'John Doe', status: 'Pending', date: '2024-07-20' },
  { id: 2, platform: 'Mobile', customerName: 'Jane Smith', status: 'Completed', date: '2024-07-19' },
  { id: 3, platform: 'Web', customerName: 'Alice Johnson', status: 'Processing', date: '2024-07-18' },
  { id: 4, platform: 'Mobile', customerName: 'Bob Williams', status: 'Cancelled', date: '2024-07-17' },
  { id: 5, platform: 'Web', customerName: 'Charlie Brown', status: 'Pending', date: '2024-07-16' },
];

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus ? order.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by customer name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 px-3 py-2 rounded-md w-1/3"
        />
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className="border border-gray-300 px-3 py-2 rounded-md"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Platform</th>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border p-2">{order.platform}</td>
                <td className="border p-2">{order.customerName}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">{order.date}</td>
                <td className="border p-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1">View</button>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-1">Edit</button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1">Invoice</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;