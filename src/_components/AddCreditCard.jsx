import React, { useState } from "react";

function AddCreditCard() {
  // State variables to store form data
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [cvv, setCvv] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to process payment, validate fields, etc.
    console.log({
      cardHolderName,
      cardNumber,
      expiryMonth,
      cvv,
    });
    alert("Payment Submitted");
  };

  return (
    <div className="flex max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Left Side Logo Section */}
      <div className="bg-green-800 text-white p-8 flex flex-col justify-center items-center w-1/3">
        <h1 className="text-2xl font-semibold">Manakish</h1>
        <span className="block text-sm font-light tracking-widest mt-1">
          STORAS
        </span>
      </div>

      {/* Right Side Payment Form */}
      <div className="p-8 w-2/3">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card Holder Name */}
          <div>
            <label className="block text-gray-600 mb-1">Card Holder Name</label>
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              placeholder="Enter Name"
              className="w-full border border-[#d4a373] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-gray-600 mb-1">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter Card Number"
              className="w-full border border-[#d4a373] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Expiry Month and CVV */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-1">Expiry Month</label>
              <input
                type="text"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                placeholder="MM/YY"
                className="w-full border border-[#d4a373] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-1">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="Enter CVV"
                className="w-full border border-[#d4a373] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Pay Now Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            >
              Pay now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCreditCard;
