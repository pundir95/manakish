"use client";
import React, { useState } from "react";
import TickIcon from "../../public/icons/Tick";
import { CiWallet } from "react-icons/ci";

function WalletBalance() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayNowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Left Side Logo Section */}
      <div className="bg-green-800 text-white p-6 flex flex-col justify-center items-center w-1/3">
        <h1 className="text-2xl font-semibold">Manakish</h1>
        <span className="block text-sm font-light tracking-widest mt-1">
          STORAS
        </span>
      </div>

      {/* Right Side Content */}
      <div className="p-6 w-2/3">
        <div className="text-gray-600 mb-4">
          <p className="flex items-center text-yellow-600 text-sm">
            {/* <span className="material-icons mr-1">warning</span> */}
            Sufficient balance available. You can proceed with the payment.
          </p>
        </div>

        <div className="flex text-gray-800 mb-4 gap-4">
          <div className="flex-1 border-r">
            <div className="flex gap-2">
              <div className="text-2xl text-black"><CiWallet/></div>
              <div>
            <p className="text-sm">Wallet Balance</p>
            <p className="text-2xl text-[#D96C3E]">20.00 SEK</p>
            </div>
            </div>
          </div>
          <div className="">
          <div className="flex gap-2">
          <div className="text-2xl text-black"><CiWallet/></div>
          <div>
            <p className="text-sm">Required Amount</p>
            <p className="text-2xl text-[#D96C3E]">45.00 SEK</p>
            </div>
            </div>
          </div>
        </div>

        {/* <p className="text-center text-gray-500 mb-4">
          Add funds now to avoid interruption.
        </p> */}

        <div className="text-center">
          <button
            className="bg-green-800 text-white px-8 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            onClick={handlePayNowClick}
          >
            Pay Now
          </button>
        </div>
      </div>
      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal Container */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5">
            {/* Icon Section */}
            <div className="flex justify-end text-black cursor-pointer" onClick={closeModal}>
              X
            </div>
            <div className="flex justify-center mb-4">
              <TickIcon />
            </div>

            <h2 className="text-center text-lg font-semibold text-gray-800">
              Thank you for ordering!
            </h2>
            <p className="text-center text-gray-600 mt-2 text-nowrap">
              Your order has been placed successfully. We have received your
              order.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletBalance;
