"use client";

import React, { useState } from "react";
import { GiBasket } from "react-icons/gi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({ handleAddressCheckout }) {
  const [quantity, setQuantity] = useState(1);
  const [saveAddress, setSaveAddress] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(0, prev + change));
  };

  return (
    <>
    <div className="bg-[#faf4ed] p-6 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-xl text-black">Shopping Cart</h2>

      {/* Cart Item */}
      <div className="border bg-white rounded-lg p-4 flex items-start gap-4">
        <div className="">
          <img
            src="/images/brevg_l.png"
            alt="Product"
            className="w-20 h-20 rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-800">Kanelbullar (Cinnamon Buns)</h3>
              <p className="text-orange-600 font-medium">10.00 SEK</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl text-black">
                <TbEdit />
              </div>
              <div className="text-2xl text-black">
                <RiDeleteBin6Line />
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-full border flex w-32 justify-around">
                <button className="text-black" onClick={() => handleQuantityChange(-1)}>-</button>
                <p className="text-black">{quantity}</p>
                <button className="text-black" onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>
          </div>
          <ul className="mt-4 text-gray-600 space-y-1">
            {[
              "Zaatar",
              "Zaatar With Labneh",
              "Zaatar With Halloumi Cheese",
              "Spinach",
              "Spinach with cheese",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-orange-200"
              >
                <span>{item}</span>
                <span>xl</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border bg-white rounded-lg p-4 flex items-start gap-4">
        <div className="">
          <img
            src="/images/brevg_l.png"
            alt="Product"
            className="w-20 h-20 rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-800">Kanelbullar (Cinnamon Buns)</h3>
              <p className="text-orange-600 font-medium">10.00 SEK</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl text-black">
                <TbEdit />
              </div>
              <div className="text-2xl text-black">
                <RiDeleteBin6Line />
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-full border flex w-32 justify-around">
                <button className="text-black" onClick={() => handleQuantityChange(-1)}>-</button>
                <p className="text-black">{quantity}</p>
                <button className="text-black" onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>
          </div>
          <ul className="mt-4 text-gray-600 space-y-1">
            {[
              "Zaatar",
              "Zaatar With Labneh",
              "Zaatar With Halloumi Cheese",
              "Spinach",
              "Spinach with cheese",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-orange-200"
              >
                <span>{item}</span>
                <span>xl</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Special Remarks */}
      <div>
        <label className="block text-black">
          Special Remarks
        </label>
        <input
          type="text"
          placeholder="Enter your special remarks"
          className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
        />
      </div>

      {/* Promotions */}
      <div>
        <label className="block text-black">Promotions</label>
        <input
          type="text"
          placeholder="Enter promotions code"
          className="w-full border border-orange-200 text-black p-2 rounded-md mt-2 text-black focus:outline-none"
        />
      </div>

      {/* Gift Card */}
      <div className="">
        <label className="flex items-center space-x-2">
        <div
          onClick={() => setSaveAddress(!saveAddress)}
          className={`relative inline-block w-12 h-6 rounded-full transition duration-300 ease-in-out cursor-pointer ${
            saveAddress ? "bg-[#35653e]" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
              saveAddress ? "transform translate-x-6" : ""
            } bg-white`}
          ></span>
        </div>
          <span className="text-black">Gift Card</span>
        </label>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="text-black">Receiver's Name</label>
          <input
            type="text"
            placeholder="Receiver's Name"
            className="w-full border border-gray-300 rounded-md p-2 mt-2 text-black focus:outline-none"
          />
          </div>
          <div>
          <label className="text-black">Receiver's Phone</label>
          <input
            type="text"
            placeholder="Receiver's Phone"
            className="w-full border border-gray-300 rounded-md p-2 mt-2 text-black focus:outline-none"
          />
          </div>
        </div>
        <div className="flex justify-end">
        <div className="flex items-center space-x-2 mt-4">
        <div
          onClick={() => setSaveAddress(!saveAddress)}
          className={`relative inline-block w-12 h-6 rounded-full transition duration-300 ease-in-out cursor-pointer ${
            saveAddress ? "bg-[#35653e]" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
              saveAddress ? "transform translate-x-6" : ""
            } bg-white`}
          ></span>
        </div>
          <label className="text-gray-700 font-medium">
            Call Recipient on arrival
          </label>
        </div>
        </div>
        <div className="mt-4">
        <label className="text-black">Gift Message</label>
          <input
            type="text"
            placeholder="Enter your special remarks"
            className="w-full border border-orange-200 rounded-md p-2 mt-2 text-black focus:outline-none"
          />
        </div>
      </div>
    </div>
    <div className="h-24 bg-[#D4A373] rounded-t-lg w-full flex items-center justify-end p-6">
    <div className="flex gap-4 justify-center items-center">
      <p className="text-black">1,750.00 SEK</p>
      <button className="px-4 py-2 bg-[#35653e] rounded-full flex w-40 justify-around">
        <div
          className="flex gap-4 items-center"
          onClick={handleAddressCheckout}
        >
          <GiBasket />
          <p>Checkout</p>
        </div>
      </button>
    </div>
  </div>
  </>
  );
}

export default ShoppingCart;
