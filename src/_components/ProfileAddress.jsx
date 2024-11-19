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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {addresses.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              gap: "16px",
              width: "48%",
              backgroundColor: "white"
            
            }}
          >
            <div>
            <HomeIcon/>
            </div>
            <div className="w-4/5">
            <div className="text-[#DBDBDB] text-sm"><span className="text-black text-sm">Street Address:</span>{card.street}</div>
            <div className="text-[#DBDBDB] text-sm"><span className="text-black text-sm">City:</span>{card.city}</div>
            <div className="text-[#DBDBDB] text-sm"><span className="text-black text-sm">Postal Code:</span>{card.postalCode}</div>
            <div className="text-[#DBDBDB] text-sm"><span className="text-black text-sm">Country:</span>{card.country}</div>
            </div>
            <div className="w-1/5 flex gap-1 items-end">
            <PencilIcon/>
            <DeleteIcon/>
            </div>
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "14px",
          color: "#fff",
          backgroundColor: "#2a4423",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Address
      </button>
    </div>
  );
};

export default ProfileAddress;
