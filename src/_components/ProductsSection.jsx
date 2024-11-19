"use client"
import React from "react";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from 'next/navigation'

const DUMMY_DATA = [
  {
    imageUrl: "/images/image_1.png",
    title: "Whole Grain bread",
    price: 40,
  },
  {
    imageUrl: "/images/image_2.png",
    title: "Premium Cookies",
    price: 30,
  },
  {
    imageUrl: "/images/image_3.png",
    title: "Premium Bread",
    price: 10,
  },
  {
    imageUrl: "/images/img_4.png",
    title: "Premium Cookies",
    price: 10,
  },
  {
    imageUrl: "/images/img_5.png",
    title: "Premium Cookies",
    price: 10,
  },
  {
    imageUrl: "/images/img_6.png",
    title: "Premium Cookies",
    price: 10,
  },
];

const ProductsSection = ({hideAllProducts}) => {

  const router = useRouter();

  const handleProductClick = () => {
    router.push("/single-product");
  };

  return (
    <section className="m-4">
    {!hideAllProducts && <h3 className="text-lg text-black font-semibold mb-4">All Products</h3>}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {DUMMY_DATA
        .map((ele, index) => (
          <div
            className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer"
            key={index}
            onClick={handleProductClick}
          >
            <img
              src={ele.imageUrl}
              alt={ele.title}
              className="w-full rounded-lg mb-4"
            />
            <div className="flex justify-between gap-2 items-center">
              <div>
            <h4 className="text-xs text-[#2E4A3D] text-nowrap	">{ele.title}</h4>
            <p className="text-gray-500 text-sm">
              <span className="line-through">$70.00</span>{" "}
              <span className="text-orange-600">$60.00</span>
            </p>
            </div>
            <div className="flex justify-between items-center gap-1">
              <div className="rounded-full p-1 bg-neutral-400">
              <AiOutlineHeart size={20} />
              </div>
              <div className="rounded-full p-1 bg-neutral-400">
              <AiOutlineShoppingCart size={20} />
              </div>
            </div>
            </div>
          </div>
        ))}
    </div>
  </section>
  );
};

export default ProductsSection;
