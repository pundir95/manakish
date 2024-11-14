"use client";
import { useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import GoogleMap from "./_common/GoogleMap";

function CartAddress() {
  const [selectedType, setSelectedType] = useState("Home");
  const [saveAddress, setSaveAddress] = useState(false);

  const Tabs = [
    {
      name: "Home",
      icons: <MdHome />,
    },
    {
      name: "Apartment",
      icons: <FaRegBuilding />,
    },
    {
      name: "Office",
      icons: <PiBuildingOfficeBold />,
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f4f1e9] rounded-md shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">
        Delivery Area & Location
      </h1>

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Address Details
        </label>
        <div className="flex gap-4 mb-4">
          {Tabs?.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`flex-1 py-2 rounded-md border ${
                selectedType.name === type.name
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {type.icons}
              {type.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">
          Choose on map
        </label>
        <div className="border rounded-md overflow-hidden">
         <GoogleMap/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Street Address *
          </label>
          <input
            type="text"
            placeholder="Enter Street Address"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            City *
          </label>
          <input
            type="text"
            placeholder="Enter City"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Postal Code *
          </label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Country *
          </label>
          <input
            type="text"
            placeholder="Enter Country"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Additional Notes
        </label>
        <textarea
          placeholder="Enter your special remarks"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="3"
        ></textarea>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <label className="font-semibold text-gray-700">Save Address</label>
        <input
          type="checkbox"
          checked={saveAddress}
          onChange={() => setSaveAddress(!saveAddress)}
          className="h-5 w-5 text-green-600 focus:ring-0"
        />
      </div>

      <button className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700">
        Save Address
      </button>
    </div>
  );
}

export default CartAddress;
