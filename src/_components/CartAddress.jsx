"use client";
import { useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import GoogleMap from "./_common/GoogleMap";
import { GiBasket } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";

function CartAddress() {
  const [selectedType, setSelectedType] = useState("Home");
  const [saveAddress, setSaveAddress] = useState(false);
  
  const router = useRouter();
  
  const { handleSubmit, register, formState: { errors } } = useForm();

  const handleCheckoutClick = () => {
    router.push("/payment-mode");
  };

  const Tabs = [
    {
      name: "Home",
      icons: <MdHome />,
    },
    {
      name: "Apartment",
      icons: <FaRegBuilding />,
    },
    {
      name: "Office",
      icons: <PiBuildingOfficeBold />,
    },
  ];

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    handleCheckoutClick();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-4">
      <h1 className="text-1xl font-semibold mb-4 text-gray-700">
        Delivery Area & Location
      </h1>
      
      <div>
        <label className="block text-gray-700 mb-2">Address Details</label>
        <div className="flex gap-4 mb-4">
          {Tabs?.map((type) => (
            <button
              key={type.name}
              onClick={() => setSelectedType(type)}
              type="button"
              className={`flex-2 flex p-2 rounded-md border items-center justify-center gap-4 ${
                selectedType.name === type.name
                  ? "bg-[#35653e] text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              <div className="text-2xl">{type.icons}</div>
              <div>{type.name}</div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Choose on map</label>
        <div className="border rounded-md overflow-hidden">
          <GoogleMap />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-1">Street Address *</label>
          <input
            type="text"
            placeholder="Enter Street Address"
            {...register("streetAddress", { required: "Street Address is required" })}
            className="w-full text-black border border-orange-200 p-2 rounded-md focus:outline-none"
          />
          {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">City *</label>
          <input
            type="text"
            placeholder="Enter City"
            {...register("city", { required: "City is required" })}
            className="w-full border text-black border-orange-200 p-2 rounded-md focus:outline-none"
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Postal Code *</label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            {...register("postalCode", { required: "Postal Code is required" })}
            className="w-full border text-black border-orange-200 p-2 rounded-md focus:outline-none"
          />
          {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Country *</label>
          <input
            type="text"
            placeholder="Enter Country"
            {...register("country", { required: "Country is required" })}
            className="w-full border border-orange-200 text-black p-2 rounded-md focus:outline-none"
          />
          {errors.country && <p className="text-red-500">{errors.country.message}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Additional Notes</label>
        <textarea
          placeholder="Enter your special remarks"
          {...register("additionalNotes")}
          className="w-full border border-orange-200 text-black p-2 rounded-md focus:outline-none"
          rows="3"
        ></textarea>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <label className="text-gray-700">Save Address</label>
        <div
          onClick={() => setSaveAddress(!saveAddress)}
          className={`relative inline-block w-12 h-6 rounded-full transition duration-300 ease-in-out cursor-pointer ${saveAddress ? "bg-[#35653e]" : "bg-gray-300"}`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${saveAddress ? "transform translate-x-6" : ""} bg-white`}
          ></span>
        </div>
      </div>

      <div className="h-24 bg-[#D4A373] rounded-t-lg w-full flex items-center justify-end p-6">
        <div className="flex gap-4 justify-center items-center">
          <p className="text-black">1,750.00 SEK</p>
          <button
            type="submit"
            className="px-4 py-2 bg-[#35653e] rounded-full flex w-40 justify-around"
          >
            <div className="flex gap-4 items-center">
              <GiBasket />
              <p>Checkout</p>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CartAddress;
