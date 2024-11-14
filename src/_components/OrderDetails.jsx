import React from 'react';
import PriceSummary from './PriceSummary';

const items = [
  { id: 1, name: "Kanelbullar (Cinnamon Buns)", quantity: "Q2 - 10.00 SEK", price: "20.00 SEK", imageUrl: "/images/hot_brevg.png" },
  { id: 2, name: "Kanelbullar (Cinnamon Buns)", quantity: "Q2 - 10.00 SEK", price: "20.00 SEK", imageUrl: "/images/hot_brevg.png" },
  { id: 3, name: "Kanelbullar (Cinnamon Buns)", quantity: "Q2 - 10.00 SEK", price: "20.00 SEK", imageUrl: "/images/hot_brevg.png" },
];

const OrderDetails = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-3 mt-3">
      {items.map(item => (
        <div key={item.id} className="flex items-center border-b-2 mb-2 p-2">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-4">
            <div className="font-medium text-gray-700">{item.name}</div>
            <div className='text-gray-700'>{item.quantity}</div>
          </div>
          <div className="ml-auto font-semibold text-gray-700">{item.price}</div>
        </div>
      ))}
      <PriceSummary/>
    </div>
  );
};

export default OrderDetails;
