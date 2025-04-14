'use client';
import React, { useState } from 'react';

const NewOrderPage = () => {
  const [platform, setPlatform] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [products, setProducts] = useState([{ name: '', quantity: 0, price: 0 }]);
  const [notes, setNotes] = useState('');

  const handlePlatformChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value);
  };

  const handleCustomerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value);
  };

  const handleCustomerPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerPhone(event.target.value);
  };

  const handleCustomerAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerAddress(event.target.value);
  };

  const handleProductChange = (index: number, field: string, value: any) => {
    const newProducts = [...products];
    newProducts[index] = value;
    setProducts(newProducts);
  };

  const addProduct = () => {
    setProducts([...products, { name: '', quantity: 0, price: 0 }]);
  };

  const removeProduct = (index: number) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.quantity * product.price, 0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Order submitted:', {
      platform,
      customerName,
      customerPhone,
      customerAddress,
      products,
      notes,
      totalPrice: calculateTotalPrice(),
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
            Platform
          </label>
          <select
            id="platform"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={platform}
            onChange={handlePlatformChange}
          >
            <option value="">Select a platform</option>
            <option value="Website">Website</option>
            <option value="Ebay">Ebay</option>
            <option value="Amazon">Amazon</option>
            <option value="Shopify">Shopify</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4">
            <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Customer Name
                </label>
                <input
                type="text"
                id="customerName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={customerName}
                onChange={handleCustomerNameChange}
                />
            </div>
            <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
                Customer Phone
                </label>
                <input
                type="text"
                id="customerPhone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={customerPhone}
                onChange={handleCustomerPhoneChange}
                />
            </div>
             <div>
                <label htmlFor="customerAddress" className="block text-sm font-medium text-gray-700">
                Customer Address
                </label>
                <input
                type="text"
                id="customerAddress"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={customerAddress}
                onChange={handleCustomerAddressChange}
                />
            </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium">Products</h3>
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 mt-2">
              <input
                type="text"
                placeholder="Product Name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={product.name}
                onChange={(e) => handleProductChange(index, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, 'quantity', Number(e.target.value))}
              />
              <input
                type="number"
                placeholder="Price"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={product.price}
                onChange={(e) => handleProductChange(index, 'price', Number(e.target.value))}
              />
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeProduct(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addProduct}
          >
            Add Product
          </button>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            id="notes"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
            value={notes}
            onChange={handleNotesChange}
          />
        </div>

        <div className="font-bold">Total Price: {calculateTotalPrice()}</div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save & Generate Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrderPage;