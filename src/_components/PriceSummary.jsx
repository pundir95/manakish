import React from "react";

const PriceSummary = () => {
  return (
    <div className="text-gray-700 mb-4 mt-3 flex justify-end gap-4">
      <div className="text-end">
      <div>Items Subtotal</div>
      <div>VAT</div>
      <div>Order Total</div>
      </div>
      <div>
      <div className="text-orange-600">35000.00 SEK</div>
      <div className="text-orange-600">1200.00 SEK</div>
      <div className="text-orange-600">36200.00 SEK</div>
      </div>
    </div>
  );
};

export default PriceSummary;
