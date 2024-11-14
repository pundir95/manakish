"use client";
import GoogleMap from "@/_components/_common/GoogleMap";
import React, { useState } from "react";

function PaymentMode() {
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [amount, setAmount] = useState("");

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="mx-auto p-6 bg-[#FAF4ED] rounded-lg shadow-lg">
      <div className="text-gray-700 mb-4">
        <div className="flex">
          <div className="font-semibold">Dummy User</div>
          <div>+987 654 321 1230</div>
          <div>Storgatan 25, Stockholm, Sweden</div>
          <div>114 56</div>
        </div>
          <GoogleMap />
      </div>

      {/* Order Details */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Kanelbullar"
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-4">
            <div className="font-medium">Kanelbullar (Cinnamon Buns)</div>
            <div>Q2 - 10.00 SEK</div>
          </div>
          <div className="ml-auto font-semibold text-gray-700">20.00 SEK</div>
        </div>

        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Kanelbullar"
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-4">
            <div className="font-medium">Kanelbullar (Cinnamon Buns)</div>
            <div>Q2 - 10.00 SEK</div>
          </div>
          <div className="ml-auto font-semibold text-gray-700">20.00 SEK</div>
        </div>

        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Kanelbullar"
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-4">
            <div className="font-medium">Kanelbullar (Cinnamon Buns)</div>
            <div>Q2 - 10.00 SEK</div>
          </div>
          <div className="ml-auto font-semibold text-gray-700">20.00 SEK</div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="text-gray-700 mb-4">
        <div className="flex justify-between">
          <span>Items Subtotal</span>
          <span>35000.00 SEK</span>
        </div>
        <div className="flex justify-between">
          <span>VAT</span>
          <span>1200.00 SEK</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Order Total</span>
          <span>36200.00 SEK</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex justify-center mb-4">
        {["wallet", "debit", "credit"].map((method) => (
          <button
            key={method}
            onClick={() => handlePaymentChange(method)}
            className={`px-4 py-2 mx-1 rounded-md ${
              paymentMethod === method
                ? "bg-green-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {method === "wallet"
              ? "Wallet"
              : method === "debit"
              ? "Debit Card"
              : "Credit Card"}
          </button>
        ))}
      </div>

      {/* Amount Input */}
      <div className="flex items-center border rounded-md p-2">
        <span className="text-gray-500">SEK</span>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter your amount"
          className="ml-2 w-full outline-none"
        />
      </div>
    </div>
  );
}

export default PaymentMode;
