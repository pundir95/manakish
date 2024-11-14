"use client"
import React,{useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { GiBasket } from "react-icons/gi";
import SideBar from './SideBar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
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
        <RxHamburgerMenu size={24} color="#D96C3E" onClick={toggleSidebar}/>
        <IoSearchOutline size={24} color="#D96C3E" />
        <GiBasket size={24} color="#D96C3E" />
      </div>
    </header>
    <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </>
  )
}

export default Header