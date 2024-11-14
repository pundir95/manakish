import React, { useState } from "react";
import FooterBar from "./FooterBar";

function MenuSelection() {
  const [selectedItems, setSelectedItems] = useState([]);

  const choices = [
    "Zaatar",
    "Zaatar with Labneh",
    "Spinach",
    "Spinach with Cheese",
    "Labneh",
    "Labneh with Falafel",
    "Meat",
    "Akkawi cheese",
    "Halloumi cheese",
    "Kashkaval cheese",
    "Chickpeas Masala",
    "Beetroot with feta cheese",
    "Falafel with Tahini",
    "Indian Potatoes",
    "Chicken Tandoori",
  ];

  const drinks = [
    { name: "Orange Juice Combo 6 Bottles", price: "KD 5.000" ,image:"/images/drink_1.png" },
    { name: "Orange Juice", price: "KD 1.000",image:"/images/drink_2.png" },
    { name: "Coca-Cola", price: "KD 0.250",image:"/images/drink_3.png" },
    { name: "Sprite", price: "KD 0.250",image:"/images/drink_3.png" },
    { name: "Coke Zero", price: "KD 0.250",image:"/images/drink_2.png" },
    { name: "Fanta Orange", price: "KD 0.250" ,image:"/images/drink_1.png"},
  ];

  const handleSelection = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((selected) => selected !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="p-1 bg-[#faf4ed]">
      {/* Your Choice Section */}
      <>
        <div className="flex justify-between items-center mt-2">
        <div className="text-lg text-gray-600 font-semibold">Your Choice of</div>
        <div className="text-right text-gray-600 text-sm">
          Max. Selection : 6, Min Selection : 6
        </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-3">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handleSelection(choice)}
              className={`py-1 px-2 rounded-md border-2 font-medium text-center ${
                selectedItems.includes(choice)
                  ? "bg-green-700 text-white"
                  : "text-gray-800"
              }`}
            >
              {choice}
            </button>
          ))}
        </div>
      </>

      {/* Drinks Section */}
      <div className="mt-4">
        <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-semibold text-gray-600">Drinks</h2>
        <div className="text-right text-gray-600 text-sm">
          Max. Selection : 4, Min Selection : 2
        </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-3">
          {drinks.map((drink) => (
            <div
              key={drink.name}
              className="flex flex-row items-center border border-gray-200 rounded-md text-center bg-gray-50"
            >
                <div>
              <img
                src={drink.image}
                alt={drink.name}
                className="w-16 h-16 rounded-md mb-2"
              />
              </div>
              <div>
              <p className="text-gray-800 font-medium">{drink.name}</p>
              <p className="text-orange-600 text-sm font-semibold">{drink.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-black mt-4">Special Request</p>
      <textarea
        rows={4}
        className="border rounded-xl p-2 w-full mt-2 border-amber-600 text-black"
        placeholder="Special Instructions"
      />
      <FooterBar/>
    </div>
  );
}

export default MenuSelection;
