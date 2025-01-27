"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NAV_LINKS = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "Shop",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "Support",
    href: "/",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full shadow-md" style={{ background: "linear-gradient(95.58deg, #FFFAF4 0%, #FFDC83 99.47%)" }}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <Link href="/home">Logo</Link>
        </div>
        {/* Navigation Links Section */}
        <div className="space-x-6 hidden md:flex">
          {NAV_LINKS?.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              className={`text-gray-700 hover:text-gray-900 ${
                pathname === href ? "active-nav-link" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Login and Signup Section */}
        <div className="space-x-4">
          <Link className="text-gray-700 hover:text-gray-900" href="/login">
            Login{" "}
          </Link>
          <Link href="/sign-up" className="text-gray-700 hover:text-gray-900">
            Signup{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
