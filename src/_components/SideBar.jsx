import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Icon for closing sidebar

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Button to open sidebar */}
      {/* <button
        className="fixed top-4 right-4 z-50 p-2 bg-[#35653e] text-white rounded-lg"
        onClick={toggleSidebar}
      >
        Open Sidebar
      </button> */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#35653e] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
        >
          <IoClose size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul className="space-y-4">
            <li>My Cart</li>
            <li>Food Menu</li>
            <li>My Profile</li>
            <li>My Orders</li>
            <li>Delivery Addresses</li>
            <li>Wallet</li>
            <li>Points</li>
            <li>Delete Account</li>
          </ul>

          {/* QR Code */}
          <div className="mt-8">
            <img src="/images/qr_code.png" alt="QR Code" className="w-32 h-32 mx-auto" />
          </div>

          {/* Website Link */}
          <p className="text-center mt-4">www.manakishstoras.com</p>
        </div>
      </div>

      {/* Rest of the Page Content */}
      <div className="p-4">
        {/* Your page content here */}
      </div>
    </div>
  );
}