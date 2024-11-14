import React from "react";

const PriceSummary = () => {
  return (
    <div className="text-gray-700 mb-4 mt-3">
      <div className="flex justify-end space-x-6">
        <span>Items Subtotal</span>
        <span>35000.00 SEK</span>
      </div>
      <div className="flex justify-end space-x-6">
        <span>VAT</span>
        <span>1200.00 SEK</span>
      </div>
      <div className="flex justify-end font-semibold space-x-6">
        <span>Order Total</span>
        <span>36200.00 SEK</span>
      </div>
    </div>
  );
};

export default PriceSummary;
