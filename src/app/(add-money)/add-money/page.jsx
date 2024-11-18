import React from "react";

const AddMoney = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="bg-white rounded-lg shadow-lg w-full p-6">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <span role="img" aria-label="Wallet Icon" className="text-3xl">
                👛
              </span>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Wallet</h1>
              <p className="text-red-500 text-xl font-semibold">0.00 SEK</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
            Add Money
          </button>
        </div>

        
        <h2 className="text-lg font-semibold mb-2">Wallet History</h2>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-5 gap-4 font-semibold text-gray-700 p-4 bg-gray-100">
            <span>Date</span>
            <span>Amount Added</span>
            <span>Payment Method</span>
            <span>Status</span>
            <span>Reference ID</span>
          </div>

          {[
            { date: "2024-10-30", amount: "50.00 SEK", method: "Debit Card", status: "Completed", ref: "REF12345" },
            { date: "2024-10-30", amount: "50.00 SEK", method: "Debit Card", status: "Failed", ref: "REF12345" },
            { date: "2024-10-30", amount: "50.00 SEK", method: "Credit Card", status: "Completed", ref: "REF12345" },
            { date: "2024-10-30", amount: "50.00 SEK", method: "Debit Card", status: "Pending", ref: "REF12345" },
            { date: "2024-10-30", amount: "50.00 SEK", method: "Debit Card", status: "Completed", ref: "REF12345" },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 p-4 text-gray-600 border-b last:border-none"
            >
              <span>{item.date}</span>
              <span>{item.amount}</span>
              <span>{item.method}</span>
              <span
                className={`${
                  item.status === "Completed"
                    ? "text-green-500"
                    : item.status === "Failed"
                    ? "text-red-500"
                    : "text-yellow-500"
                } font-medium`}
              >
                {item.status}
              </span>
              <span>{item.ref}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
