'use client';
import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [invoicePrefix, setInvoicePrefix] = useState<string>('INV-');
  const [logoUrl, setLogoUrl] = useState<string>('https://example.com/logo.png');
  const [footerNote, setFooterNote] = useState<string>('Thank you for your purchase!');
  const [tax, setTax] = useState<number>(0.10);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Invoice Prefix:', invoicePrefix);
    console.log('Logo URL:', logoUrl);
    console.log('Footer Note:', footerNote);
    console.log('Tax:', tax);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="invoicePrefix" className="block mb-2">Invoice Prefix</label>
          <input
            type="text"
            id="invoicePrefix"
            value={invoicePrefix}
            onChange={(e) => setInvoicePrefix(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="logoUrl" className="block mb-2">Logo URL</label>
          <input
            type="text"
            id="logoUrl"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="footerNote" className="block mb-2">Footer Note</label>
          <textarea
            id="footerNote"
            value={footerNote}
            onChange={(e) => setFooterNote(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="tax" className="block mb-2">Tax (%)</label>
          <input
            type="number"
            id="tax"
            value={tax}
            onChange={(e) => setTax(parseFloat(e.target.value))}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;