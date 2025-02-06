import React, { useState } from "react";
import FooterBar from "./FooterBar";
import { useRouter } from 'next/navigation'

function MenuSelection() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]); 

  const router = useRouter();

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

  const handleChoiceSelection = (item) => {
    // Max. Selection: 6, Min. Selection: 6
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else if (selectedItems.length < 6) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleDrinkSelection = (drink) => {
    // Check the selection limits (Max 4, Min 2)
    if (selectedDrinks.includes(drink)) {
      setSelectedDrinks(selectedDrinks.filter((selected) => selected !== drink));  // Deselect drink if it's already selected
    } else {
      if (selectedDrinks.length < 4) {  // Max 4 drinks
        setSelectedDrinks([...selectedDrinks, drink]);
      }
    }
  };

  const handleAddToCartClick = () => {
    router.push("/shopping-cart");
  };

  return (
    <div className="p-1 bg-[#faf4ed]">
      {/* Your Choice Section */}
      <div className="m-4">
        <div className="flex justify-between items-center">
        <div className="text-lg text-gray-600 font-semibold">Your Choice of</div>
        <div className="text-right text-gray-600 text-sm">
          Max. Selection : 6, Min Selection : 6
        </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-3">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handleChoiceSelection(choice)}
              className={`py-1 px-2 rounded-md border-2 font-medium text-center ${
                selectedItems.includes(choice)
                  ? "bg-[#3E5F41] text-white"
                  : "text-gray-800"
              }`}
            >
              {choice}
            </button>
          ))}
        </div>
        {selectedItems.length < 6 && selectedItems.length > 0 && (
          <div className="text-red-600 mt-2">
            You must select exactly 6 items.
          </div>
        )}
      </div>

      {/* Drinks Section */}
      <div className="m-4">
      <div>
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
              onClick={() => handleDrinkSelection(drink.name)}
              className={`flex flex-row items-center border border-gray-200 rounded-md text-center bg-gray-50 ${
                selectedDrinks.includes(drink.name) ? 'bg-green-900 text-white' : 'cursor-pointer'
              }`}
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
        {selectedDrinks.length < 2 && selectedDrinks.length > 0 && (
          <div className="text-red-600 mt-2">
            You must select at least 2 drinks.
          </div>
        )}
        {selectedDrinks.length > 4 && (
          <div className="text-red-600 mt-2">
            You can only select up to 4 drinks.
          </div>
        )}
      </div>
      <p className="text-black mt-4">Special Request</p>
      <textarea
        rows={4}
        className="border rounded-xl p-2 w-full mt-2 border-amber-600 text-black"
        placeholder="Special Instructions"
      />
      </div>
      <FooterBar handleRoute={handleAddToCartClick}/>
    </div>
  );
}

export default MenuSelection;
