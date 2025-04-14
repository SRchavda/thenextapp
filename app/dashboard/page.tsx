import React from 'react';

const Dashboard = () => {
  const totalOrdersToday = 150;
  const platformOrderCounts = [
    { platform: 'Web', count: 80 },
    { platform: 'Mobile App', count: 50 },
    { platform: 'Other', count: 20 },
  ];
  const recentOrders = [
    { id: 1, customer: 'John Doe', date: '2023-10-27' },
    { id: 2, customer: 'Jane Smith', date: '2023-10-27' },
    { id: 3, customer: 'Peter Jones', date: '2023-10-26' },
    { id: 4, customer: 'Alice Brown', date: '2023-10-26' },
    { id: 5, customer: 'Bob White', date: '2023-10-25' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Orders Today</h2>
          <p className="text-3xl font-bold text-blue-600">{totalOrdersToday}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Platform-wise Orders</h2>
          <ul>
            {platformOrderCounts.map((item) => (
              <li key={item.platform} className="flex justify-between">
                <span>{item.platform}</span>
                <span>{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create New Order
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recently Created Orders</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>ID</th>
              <th>Customer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;