"use client";
import React, { useState } from "react";
import { CiWallet } from "react-icons/ci";
import PaymentMethods from "@/_components/PaymentMethods";

const AddMoney = () => {
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleAddMoney = () => {
    setShowPaymentMethod(true);
  };

  return (
    <div className="flex flex-col justify-center p-2 gap-4">
      <div className="text-black text-xl">Wallet</div>
      <div className="bg-white rounded-xl shadow-lg w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-black text-6xl">
              <CiWallet />
            </div>
            <div>
              <h1 className="text-lg text-black">Wallet</h1>
              <p className="text-xl text-orange-600">0.00 SEK</p>
            </div>
          </div>
          <button
            className="bg-[#3E5F41] text-white px-6 py-2 shadow-md hover:bg-green-600 rounded-full"
            onClick={handleAddMoney}
          >
            Add Money
          </button>
        </div>
      </div>

      <div className="">
        <h2 className="text-lg mb-2 text-black pb-2 border-b border-[#D4A373B2]">
          Wallet History
        </h2>
        <div className="rounded-lg overflow-hidden">
          <div className="grid grid-cols-5 gap-4 text-gray-700 p-4 bg-transparent">
            <span>Date</span>
            <span>Amount Added</span>
            <span>Payment Method</span>
            <span>Status</span>
            <span>Reference ID</span>
          </div>

          {[
            {
              date: "2024-10-30",
              amount: "50.00 SEK",
              method: "Debit Card",
              status: "Completed",
              ref: "REF12345",
            },
            {
              date: "2024-10-30",
              amount: "50.00 SEK",
              method: "Debit Card",
              status: "Failed",
              ref: "REF12345",
            },
            {
              date: "2024-10-30",
              amount: "50.00 SEK",
              method: "Credit Card",
              status: "Completed",
              ref: "REF12345",
            },
            {
              date: "2024-10-30",
              amount: "50.00 SEK",
              method: "Debit Card",
              status: "Pending",
              ref: "REF12345",
            },
            {
              date: "2024-10-30",
              amount: "50.00 SEK",
              method: "Debit Card",
              status: "Completed",
              ref: "REF12345",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 p-4 text-black bg-white mb-2 rounded-lg"
            >
              <span>{item.date}</span>
              <span>{item.amount}</span>
              <span>{item.method}</span>
              <span className="">{item.status}</span>
              <span>{item.ref}</span>
            </div>
          ))}
        </div>
      </div>
      {showPaymentMethod && (
        <PaymentMethods
          handlePaymentChange={handlePaymentChange}
          paymentMethod={paymentMethod}
        />
      )}
    </div>
  );
};

export default AddMoney;
