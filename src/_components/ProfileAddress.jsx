import React from "react";
import HomeIcon from "../../public/icons/Home";
import DeleteIcon from "../../public/icons/delete";
import PencilIcon from "../../public/icons/pencil";

const ProfileAddress = () => {
  const addresses = [
    {
      street: 'Sveavägen',
      city: 'Göteborg',
      postalCode: '411 07',
      country: 'Sweden',
    },
    {
      street: 'Sveavägen',
      city: 'Göteborg',
      postalCode: '411 07',
      country: 'Sweden',
    },
    {
      street: 'Sveavägen',
      city: 'Göteborg',
      postalCode: '411 07',
      country: 'Sweden',
    },
    {
      street: 'Sveavägen',
      city: 'Göteborg',
      postalCode: '411 07',
      country: 'Sweden',
    },
  ];

  const handleDelete = (id) => {
    console.log(`Delete card with id: ${id}`);
  };

  const handleMakeDefault = (id) => {
    console.log(`Make card with id: ${id} default`);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-5">
        {addresses.map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 flex justify-between shadow-md gap-4 w-[48%] bg-white"
          >
            <div>
              <HomeIcon />
            </div>
            <div className="w-4/5">
              <div className="text-gray-400 text-sm">
                <span className="text-black text-sm">Street Address:</span> {card.street}
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-black text-sm">City:</span> {card.city}
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-black text-sm">Postal Code:</span> {card.postalCode}
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-black text-sm">Country:</span> {card.country}
              </div>
            </div>
            <div className="w-1/5 flex gap-1 items-end">
              <PencilIcon />
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 px-6 py-2 text-sm text-white bg-[#2a4423] border-none rounded cursor-pointer">
        Add Address
      </button>
    </div>
  );
};

export default ProfileAddress;
