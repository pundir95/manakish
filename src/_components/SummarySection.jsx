import React from "react";

const SummarySection = () => {
  return (
    <div>
      <div className="flex flex-col p-5 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Summary</h2>

        <div className="space-y-4">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center">
                  <img
                    src="/images/croissant.png"
                    alt="Croissant" 
                    className="w-16 h-16 object-cover mr-3"
                  />
                  <span className="font-semibold">Premium Croissant</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700">$20.00</span>
                  <button className="ml-2 text-blue-500 hover:text-blue-700">
                    +
                  </button>
                  <span className="mx-2">20</span>
                  <button className="text-blue-500 hover:text-blue-700">
                    -
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">$1600.00</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-semibold">Shipping charges</span>
          <span className="font-semibold">$50.00</span>
        </div>
        <div className="flex justify-between mt-2 border-t pt-2">
          <span className="font-bold">Total</span>
          <span className="font-bold text-lg">$1650.00</span>
        </div>

        <button className="mt-5 bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition duration-200">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default SummarySection;
