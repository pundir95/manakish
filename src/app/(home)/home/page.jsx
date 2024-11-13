"use client";
import React, {useState} from "react";
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


export default function Home() {
  const [selectedOption, setSelectedOption] = useState('Delivery');
  return (
    <div>
      {/* Left Side Image */}

      {/* Right Side Content */}
      <div>
        {/* Header */}
        <header className="flex items-center justify-between pb-6">
          <div className="flex items-center">
            <img
              src="/images/user.png"
              className="rounded-full"
              alt="login-image"
            />
            <div className="ml-3">
              <h2 className="text-2xl text-[#D96C3E] font-semibold">Adam</h2>
              <p className="text-[#D96C3E] text-sm m-0">300 KD</p>
            </div>
          </div>
          <div className="flex gap-4">
            <IoSearchOutline size={24} color="#D96C3E" />
            <GiBasket size={24} color="#D96C3E" />
          </div>
        </header>


        {/* Delivery Details */}
        <div className="bg-[#f9f5f1] p-4 rounded-lg mb-6 border">

<div className="flex p-4 bg-[#faf5ed] rounded-lg">
      {/* Delivery/Pickup Toggle */}
      <div className="flex-1 border border-orange-200 rounded-lg p-4 mr-4">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              selectedOption === 'Delivery'
                ? 'bg-[#35653e] text-white'
                : 'bg-transparent text-[#35653e] border border-orange-200'
            }`}
            onClick={() => setSelectedOption('Delivery')}
          >
            Delivery
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              selectedOption === 'Pickup'
                ? 'bg-[#35653e] text-white'
                : 'bg-transparent text-[#35653e] border border-orange-200'
            }`}
            onClick={() => setSelectedOption('Pickup')}
          >
            Pickup
          </button>
        </div>

        {/* Delivery Information */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Delivery To</label>
          <div className="relative">
            <select className="w-full border border-orange-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#35653e]">
              <option>Abdullah al Mubarak (West Jeleeb) Edit</option>
            </select>
          </div>
        </div>

        {/* Earliest Arrival */}
        <div className="flex items-center justify-between">
          <label className="text-gray-600">Earliest Arrival</label>
          <a href="#" className="text-[#35653e] text-sm">Schedule Later</a>
        </div>
        <div className="mt-2">
          <input
            type="text"
            value="20 Min"
            disabled
            className="w-full border border-orange-200 rounded-lg p-3 text-gray-800 bg-[#faf5ed] focus:outline-none"
          />
        </div>
      </div>

      {/* Fast & Free Delivery Image Section */}
      <div className="w-64 flex items-center justify-center bg-[#35653e] text-white rounded-lg p-4">
        <div className="text-center">
          <p className="font-bold text-xl mb-2">Fast & Free</p>
          <p className="font-extrabold text-2xl mb-4">DELIVERY</p>
          <p>Free Delivery on Orders Above $20</p>
          {/* Replace with your desired image */}
          <img src="https://via.placeholder.com/100" alt="Fast and Free Delivery" className="mx-auto mt-4" />
        </div>
      </div>
    </div>
          
        </div>

        <div className="bg-green-600 p-4 rounded-lg text-white text-center mb-6">
          <h4 className="text-lg font-semibold">Fast & Free DELIVERY</h4>
          <p className="text-sm">Free Delivery on Orders Above $20</p>
        </div>

        {/* Category Carousel */}
        <div className="">
        <CategoryCarousel/>
        </div>

        {/* Product Grid */}
        <ProductsSection/>
      </div>
    </div>
  );
}
