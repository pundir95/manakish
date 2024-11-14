import React from 'react';

function WalletBalance() {
  return (
    <div className="flex mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      
      {/* Left Side Logo Section */}
      <div className="bg-green-800 text-white p-6 flex flex-col justify-center items-center w-1/3">
        <h1 className="text-2xl font-semibold">Manakish</h1>
        <span className="block text-sm font-light tracking-widest mt-1">STORAS</span>
      </div>
      
      {/* Right Side Content */}
      <div className="p-6 w-2/3">
        <div className="text-gray-600 mb-4">
          <p className="flex items-center text-yellow-600 text-sm">
            {/* <span className="material-icons mr-1">warning</span> */}
            Sufficient balance available. You can proceed with the payment.
          </p>
        </div>

        <div className="flex justify-between text-center text-gray-800 mb-4">
          <div>
            <p className="text-sm">Wallet Balance</p>
            <p className="text-2xl font-semibold">20.00 SEK</p>
          </div>
          <div>
            <p className="text-sm">Required Amount</p>
            <p className="text-2xl font-semibold">45.00 SEK</p>
          </div>
        </div>

        {/* <p className="text-center text-gray-500 mb-4">
          Add funds now to avoid interruption.
        </p> */}

        <div className="text-center">
          <button className="bg-green-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition duration-300">
             Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletBalance;
