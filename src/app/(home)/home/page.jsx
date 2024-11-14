"use client";
import React, { useState } from "react";
import { TbWallet } from "react-icons/tb";
import { RiMenu3Line } from "react-icons/ri";
import { GiBasket } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import CommonTextInput from "@/_form-fields/CommonTextInput";
import { useForm } from "react-hook-form";
import { CompanySignupValidations } from "@/_validations/authValidations";
import { FaUserCircle } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CategoryCarousel from "@/_components/CategoryCarousel";
import ProductsSection from "@/_components/ProductsSection";
import Autocomplete from "react-google-autocomplete";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Delivery");

  return (
    <>
      <div className="flex rounded-lg">
        {/* Delivery/Pickup Toggle */}
        <div className="flex-1 border border-orange-200 rounded-lg p-4 mr-4 relative">
          <div className="flex justify-center mb-4 absolute -top-5 left-28">
            <button
              className={`px-4 py-2 rounded-l-full ${
                selectedOption === "Delivery"
                  ? "bg-[#35653e] text-white"
                  : "bg-white text-[#35653e]"
              }`}
              onClick={() => setSelectedOption("Delivery")}
            >
              Delivery
            </button>
            <button
              className={`px-4 py-2 rounded-r-full ${
                selectedOption === "Pickup"
                  ? "bg-[#35653e] text-white"
                  : "bg-white text-[#35653e]"
              }`}
              onClick={() => setSelectedOption("Pickup")}
            >
              Pickup{" "}
            </button>
          </div>

          {/* Delivery Information */}
          {selectedOption === "Delivery" ? (
            <>
              <div className="mb-2">
                <label className="block text-gray-600 mb-1">Delivery To</label>
                <div className="relative">
                  {/* <select className="w-full border border-orange-200 rounded-full p-2 text-gray-800 bg-[#faf5ed]">
                <option>Abdullah al Mubarak (West Jeleeb) Edit</option>
              </select> */}
                  <Autocomplete
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_AUTOCOMPLETE_API_KEY}
                    onPlaceSelected={(place) => {
                      const lat = place.geometry.location.lat();
                      const lng = place.geometry.location.lng();
                      console.log("Latitude:", lat);
                      console.log("Longitude:", lng);
                    }}
                    className="w-full border border-orange-200 rounded-full p-2 text-gray-800 bg-[#faf5ed]"
                  />
                </div>
              </div>

              {/* Earliest Arrival */}
              <div className="flex items-center justify-between">
                <label className="text-gray-600">Earliest Arrival</label>
                <a href="#" className="text-[#35653e] text-sm">
                  Schedule Later
                </a>
              </div>
              <div className="mt-1">
                <input
                  type="time"
                  // value="20 Min"
                  // disabled
                  className="w-full border border-orange-200 rounded-full p-2 text-gray-800 bg-[#faf5ed]"
                />
              </div>
            </>
          ) : (
            <div className="mt-8">
              <label className="block text-gray-600 mb-1">Pickup From</label>
              <div>
                <Autocomplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_AUTOCOMPLETE_API_KEY}
                  onPlaceSelected={(place) => {
                    const lat = place.geometry.location.lat();
                    const lng = place.geometry.location.lng();
                    console.log("Latitude:", lat);
                    console.log("Longitude:", lng);
                  }}
                  className="w-full border border-orange-200 rounded-full p-2 text-gray-800 bg-[#faf5ed]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Fast & Free Delivery Image Section */}
        <div className="w-60 min-h-full">
          <img
            src="/images/freeDelivery.png"
            alt="Manakish Stories"
            className="h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Category Carousel */}
      <div>
        <CategoryCarousel />
      </div>

      {/* Product Grid */}
      <ProductsSection />
    </>
  );
}
