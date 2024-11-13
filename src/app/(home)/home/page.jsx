"use client";
import React from "react";
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
  return (
    <div className="font-[Marcellus] bg-[#f5ece1] flex min-h-screen">
      {/* Left Side Image */}
      <div className="flex items-center justify-center">
        <img
          src="/images/homeLeft.png"
          alt="Manakish Stories"
          className="max-h-full rounded-lg shadow-lg"
        />
        <h1 className="absolute text-white text-4xl font-bold">
          Manakish Stories
        </h1>
      </div>

      {/* Right Side Content */}
      <div className="w-1/2 p-6 overflow-y-auto">
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

        {/* Delivery and Pickup Options */}
        <div className="flex justify-center gap-5 mb-6">
          <button className="py-2 px-4 bg-[#c8aa81] text-white rounded-full">
            Delivery
          </button>
          <button className="py-2 px-4 bg-[#c8aa81] text-white rounded-full">
            Pickup
          </button>
        </div>

        {/* Delivery Details */}
        <div className="bg-[#f9f5f1] p-4 rounded-lg mb-6">
          <div className="flex items-center">
            <FaMotorcycle size={20} className="mr-2" />
            <p className="text-sm flex items-center">
              Abdullah al Mubarak (West Jeleeb) <BiEdit className="ml-1" />
            </p>
          </div>
          <div className="flex items-center mt-2">
            <BiTime size={20} className="mr-2" />
            <p className="text-sm">Earliest Arrival</p>
            <a href="#" className="ml-auto text-sm text-gray-500">
              Schedule Later
            </a>
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
