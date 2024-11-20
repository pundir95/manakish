import React from "react";

const ProfilePayment = () => {
  const cards = [
    {
      id: 1,
      type: "Visa",
      number: "XXXX-XXXX-XXXX-1234",
      validity: "02/2029",
      default: true,
      image: "/images/visa-logo.png",
    },
    {
      id: 2,
      type: "Mastercard",
      number: "XXXX-XXXX-XXXX-3214",
      validity: "02/2029",
      default: false,
      image: "/images/masterCard.png",
    },
    {
      id: 3,
      type: "Maestro",
      number: "XXXX-XXXX-XXXX-8765",
      validity: "02/2029",
      default: false,
      image: "/images/maestro.png",
    },
    {
      id: 4,
      type: "American Express",
      number: "XXXX-XXXX-XXXX-4536",
      validity: "02/2029",
      default: false,
      image: "/images/american.png",
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
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-between shadow-md w-[48%] bg-white"
          >
            <div className="flex justify-between items-center gap-4">
              <div>
                <img src={card.image} alt={card.type} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{card.number}</p>
                <p className="text-xs text-gray-400">Valid till {card.validity}</p>
              </div>
              <button
                className="bg-none border-none text-red-500 cursor-pointer"
                onClick={() => handleDelete(card.id)}
              >
                DELETE
              </button>
            </div>
            <div>
              {card.default ? (
                <button className="bg-gray-200 text-black py-1 px-5 rounded-full">
                  Default
                </button>
              ) : (
                <button
                  className="text-green-600 underline"
                  onClick={() => !card.default && handleMakeDefault(card.id)}
                >
                  Make Default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 py-2 px-6 text-sm text-white bg-green-800 rounded-md cursor-pointer">
        Add Card
      </button>
    </div>
  );
};

export default ProfilePayment;
