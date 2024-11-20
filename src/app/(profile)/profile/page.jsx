"use client"
import AddressList from "@/_components/AddressList";
import ModeOfPayment from "@/_components/ModeOfPayment";
import ProductsSection from "@/_components/ProductsSection";
import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import ProfilePayment from "@/_components/ProfilePayment";
import ProfileAddress from "@/_components/ProfileAddress";
import ProfileSidebar from "@/_components/ProfileSidebar";
import ImageUpload from "@/_components/ImageUpload";

const Profile = () => {
    const [paymentMethod, setPaymentMethod] = useState("favourites");
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handlePaymentChange = (method) => {
      setPaymentMethod(method);
    };

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto">
        <div className="p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-4">
            <ImageUpload/>
            <div>
              <h2 className="text-lg text-gray-500 font-semibold">Adam</h2>
              <p className="text-sm text-gray-500">adamrawles@gmail.com</p>
            </div>
          </div>
          <button className="bg-[#34552d] text-white px-4 py-2 rounded-lg hover:bg-[#2a4423]" onClick={toggleSidebar}>
            Edit Profile
          </button>
        </div>
        <div className="flex border border-[#d4a373] bg-white w-1/2 gap-4 rounded-l-full rounded-r-full ml-6 p-1 text-nowrap w-min">
          {["favourites", "addresses", "payment_methods"].map((method, index) => (
          <button
            key={method}
            onClick={() => handlePaymentChange(method)}
            className={`px-4 py-2 text-sm font-medium bg-green rounded-r-full rounded-l-full ${
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
        {paymentMethod=="favourites" &&  <ProductsSection hideAllProducts={true}/>}
        {paymentMethod=="addresses" && <ProfileAddress/>}
        {paymentMethod=="payment_methods" && <ProfilePayment/>}
      </div>
      <ProfileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
};

export default Profile;
