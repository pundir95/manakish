import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiBasket } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function SideBar({ isSidebarOpen, toggleSidebar }) {
  const router = useRouter();

  const sidebarList = [
    { name: "My Cart", icon: <GiBasket />, path: "/shopping-cart" },
    { name: "Food Menu", icon: <MdMenuBook />, path: "/" },
    { name: "My Profile", icon: <IoPersonOutline />, path: "/profile" },
    { name: "My Orders", icon: <FaClockRotateLeft />, path: "/order-history" },
    {
      name: "Delivery Addresses",
      icon: <IoLocationOutline />,
      path: "/profile",
    },
    { name: "Wallet", icon: <CiWallet />, path: "/add-money" },
    { name: "Points", icon: <GiBasket />, path: "/add-money" },
    { name: "Delete Account", icon: <RiDeleteBinLine />, path: "/profile" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#35653e] text-white rounded-l-lg transform ${
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
          <ul className="space-y-2">
            {sidebarList.map((item) => (
              <li
                className="border-b-2 border-[#D4A373B2] pb-1 cursor-pointer"
                onClick={() => router.push(item.path)}
              >
                <div className="flex gap-4 w-full items-center">
                  {item.icon}
                  {item.name}
                </div>
              </li>
            ))}
          </ul>

          {/* QR Code */}
          <div className="mt-8">
            <img
              src="/images/qr_code.png"
              alt="QR Code"
              className="w-32 h-32 mx-auto"
            />
          </div>

          {/* Website Link */}
          <p className="text-center mt-4">www.manakishstoras.com</p>
        </div>
      </div>
    </>
  );
}
