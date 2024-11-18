// AddressList.js
import React from 'react';
import { FaHome, FaEdit, FaTrash } from 'react-icons/fa';
import CartAddress from './CartAddress';

const AddressList = () => {
  const addresses = [
    {
      street: 'Sveavägen 50',
      city: 'Göteborg',
      postalCode: '411 07',
      country: 'Sweden',
    },
    {
        street: 'Sveavägen 50',
        city: 'Göteborg',
        postalCode: '411 07',
        country: 'Sweden',
      },
      {
        street: 'Sveavägen 50',
        city: 'Göteborg',
        postalCode: '411 07',
        country: 'Sweden',
      },
      {
        street: 'Sveavägen 50',
        city: 'Göteborg',
        postalCode: '411 07',
        country: 'Sweden',
      },
  ];

  return (
    <>
   { false && <div className="min-h-screen bg-[#f4ede5] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex justify-between items-start"
            >
              <div className="flex flex-col">
                <div className="flex items-center text-gray-700 mb-2">
                  <FaHome className="mr-2" />
                  <span className="font-semibold">Street Address:</span> {address.street}
                </div>
                <p className="text-gray-700"><span className="font-semibold">City:</span> {address.city}</p>
                <p className="text-gray-700"><span className="font-semibold">Postal Code:</span> {address.postalCode}</p>
                <p className="text-gray-700"><span className="font-semibold">Country:</span> {address.country}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="text-gray-600 hover:text-gray-800">
                  <FaEdit />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-[#34552d] text-white px-4 py-2 rounded-lg hover:bg-[#2a4423]">
          Add Address
        </button>
      </div>
    </div>}
    {true && <CartAddress/>}
    </>
   
  );
};

export default AddressList;
