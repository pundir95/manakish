"use client"

import React, { useState } from "react";
import { GiBasket } from "react-icons/gi";

function ShoppingCart({handleAddressCheckout}) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(0, prev + change));
  };

  return (
    <div className="bg-[#faf4ed] p-8 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold">Shopping Cart</h2>

      {/* Cart Item */}
      <div className="border border-blue-400 rounded-lg p-4 flex items-start">
        <img
          src="/images/hot_brevg.png" // replace with actual image path
          alt="Product"
          className="w-20 h-20 rounded-md mr-4"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Kanelbullar (Cinnamon Buns)</h3>
          <p className="text-orange-600 font-medium">10.00 SEK</p>
          <ul className="mt-2 text-gray-600 space-y-1">
            {["Zaatar", "Zaatar With Labneh", "Zaatar With Halloumi Cheese", "Spinach", "Spinach with cheese"].map(
              (item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item}</span>
                  <span>x1</span>
                </li>
              )
            )}
          </ul>
        </div>
        

        <div className="flex flex-col items-center space-y-2 ml-4">
          <button className="text-gray-500 hover:text-gray-700">✏️</button>
          <button className="text-gray-500 hover:text-gray-700">🗑️</button>
          <div className="flex items-center space-x-2">
            <button
              className="w-8 h-8 text-lg font-semibold text-gray-500 bg-gray-200 rounded-full"
              onClick={() => handleQuantityChange(-1)}
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              className="w-8 h-8 text-lg font-semibold text-gray-500 bg-gray-200 rounded-full"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="border border-blue-400 rounded-lg p-4 flex items-start">
        <img
          src="/images/sweet.png" // replace with actual image path
          alt="Product"
          className="w-20 h-20 rounded-sm mr-4"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Kanelbullar (Cinnamon Buns)</h3>
          <p className="text-orange-600 font-medium">10.00 SEK</p>
          <ul className="mt-2 text-gray-600 space-y-1">
            {["Zaatar", "Zaatar With Labneh", "Zaatar With Halloumi Cheese", "Spinach", "Spinach with cheese"].map(
              (item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item}</span>
                  <span>x1</span>
                </li>
              )
            )}
          </ul>
        </div>
        

        <div className="flex flex-col items-center space-y-2 ml-4">
          <button className="text-gray-500 hover:text-gray-700">✏️</button>
          <button className="text-gray-500 hover:text-gray-700">🗑️</button>
          <div className="flex items-center space-x-2">
            <button
              className="w-8 h-8 text-lg font-semibold text-gray-500 bg-gray-200 rounded-full"
              onClick={() => handleQuantityChange(-1)}
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              className="w-8 h-8 text-lg font-semibold text-gray-500 bg-gray-200 rounded-full"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Special Remarks */}
      <div>
        <label className="block text-gray-700 font-semibold">Special Remarks</label>
        <input
          type="text"
          placeholder="Enter your special remarks"
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
      </div>

      {/* Promotions */}
      <div>
        <label className="block text-gray-700 font-semibold">Promotions</label>
        <input
          type="text"
          placeholder="Enter promotions code"
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
      </div>

      {/* Gift Card */}
      <div className="border border-gray-200 rounded-md p-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
          <span className="text-gray-700 font-semibold">Gift Card</span>
        </label>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Receiver's Name"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Receiver's Phone"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your special remarks"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <label className="text-gray-700 font-medium">Call Recipient on arrival</label>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
        </div>
        
      </div>

      {/* Checkout Section */}
      <div className="h-24 bg-[#D4A373] rounded-t-lg w-full flex items-center justify-end p-6">
        <div className="flex gap-4 justify-center items-center">
          <p className="text-black">1,750.00 SEK</p>
          <button className="px-4 py-2 bg-[#35653e] rounded-full flex w-40 justify-around">
            <div className="flex gap-4 items-center" onClick={handleAddressCheckout}>
              <GiBasket />
              <p>Checkout</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
