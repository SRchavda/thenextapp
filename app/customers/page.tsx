"use client";
import React, { useState } from "react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const dummyCustomers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: "456 Oak Ave",
  },
  {
    id: 3,
    name: "Alice Johnso",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    address: "789 Pine Ln",
  },
];

const CustomersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const filteredCustomers = dummyCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
  );

  const handleViewOrders = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <input
        type="text"
        placeholder="Search customers..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Phone</th>
              <th className="px-4 py-2 border border-gray-300">Address</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {customer.id}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {customer.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {customer.email}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {customer.phone}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {customer.address}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleViewOrders(customer)}
                  >
                    View Orders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCustomer && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-lg font-bold mb-4">
              Past Orders for {selectedCustomer.name}
            </h3>
            <p>No orders for now. Dummy data for testing</p>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersPage;
