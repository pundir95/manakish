"use client"
import AddressList from "@/_components/AddressList";
import ModeOfPayment from "@/_components/ModeOfPayment";
import ProductsSection from "@/_components/ProductsSection";
import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Profile = () => {
    const [paymentMethod, setPaymentMethod] = useState("favourites");
  
    const handlePaymentChange = (method) => {
      setPaymentMethod(method);
    };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-4">
            <img
              src="/images/userXl.png"
              alt="User"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg text-gray-500 font-semibold">Adam</h2>
              <p className="text-sm text-gray-500">adamrawles@gmail.com</p>
            </div>
          </div>
          <button className="bg-[#34552d] text-white px-4 py-2 rounded-lg hover:bg-[#2a4423]">
            Edit Profile
          </button>
        </div>
        <div className="flex bg-white w-1/2 gap-4">
          {["favourites", "addresses", "payment_methods"].map((method, index) => (
          <button
            key={method}
            onClick={() => handlePaymentChange(method)}
            className={`px-4 py-2 text-sm font-medium bg-green  ${
              index === 0 ? "rounded-l-full" : index === 2 ? "rounded-r-full" : ""
            } ${
                paymentMethod === method
                ? "bg-[#35653e] text-white"
                : "bg-transparent text-[#35653e]"
            }`}
          >
            {method === "favourites"
              ? "Favourites"
              : method === "addresses"
              ? "Addresses"
              : "Payment Methods"}
          </button>
        ))}
          </div>

        {/* Product Cards Section */}
        {paymentMethod=="favourites" &&  <ProductsSection />}
        {paymentMethod=="addresses" && <AddressList/>}
        {paymentMethod=="payment_methods" && <ModeOfPayment/>}
      </div>
    </div>
  );
};

export default Profile;
