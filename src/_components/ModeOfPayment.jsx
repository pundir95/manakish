// PaymentMethods.js
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import AddCreditCard from './AddCreditCard';


const ModeOfPayment = () => {
  const paymentMethods = [
    { id: 1, type: 'Mastercard', logo: "/images/masterCard.png", number: 'XXXX-XXXXXXXX-3214', expiry: '02/2029', default: true },
    { id: 2, type: 'Visa', logo: "/images/visa-logo.png", number: 'XXXX-XXXXXXXX-3214', expiry: '02/2029', default: false },
    { id: 3, type: 'Maestro', logo: "/images/masterCard.png", number: 'XXXX-XXXXXXXX-3214', expiry: '02/2029', default: false },
    { id: 4, type: 'American Express', logo: "/images/american.png", number: 'XXXX-XXXXXXXX-3214', expiry: '02/2029', default: false },
  ];

  return (
    <>
    {false &&   
    <div className="min-h-screen bg-[#f4ede5] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img src={method.logo} alt={method.type} className="w-10 h-10" />
                <div>
                  <p className="text-lg font-semibold text-gray-500">{method.number}</p>
                  <p className="text-gray-500">Valid till {method.expiry}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {method.default ? (
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg">Default</span>
                ) : (
                  <button className="text-[#34552d] hover:underline">Make Default</button>
                )}
                <button className="text-gray-600 hover:text-gray-800">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-[#34552d] text-white px-4 py-2 rounded-lg hover:bg-[#2a4423]">
          Add Payment Method
        </button>
      </div>
    </div>}
    {true && <AddCreditCard/>}
    </>
  
  );
};

export default ModeOfPayment;
