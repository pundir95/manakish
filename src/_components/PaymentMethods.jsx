import React from 'react';
import WalletBalance from './WalletBalance';
import AddCreditCard from './AddCreditCard';

const PaymentMethods = ({ handlePaymentChange, paymentMethod }) => {
  return (
    <div className="p-4 border border-[#d4a373] rounded-lg">
      <div className="flex justify-center bg-white mb-4 p-1">
        {["wallet", "debit", "credit"].map((method, index) => (
          <button
            key={method}
            onClick={() => handlePaymentChange(method)}
            className={`px-4 py-2 text-sm font-medium bg-green  ${
              index === 0 ? "rounded-l-full" : index === 2 ? "rounded-r-full" : ""
            } ${
              paymentMethod === method
                ? "bg-[#35653e] text-white"
                : "bg-transparent text-[#35653e]"
            }`}
          >
            {method === "wallet"
              ? "Wallet"
              : method === "debit"
              ? "Debit Card"
              : "Credit Card"}
          </button>
        ))}
      </div>

      {/* Amount Input Field */}
      <div className="mt-4">
       { paymentMethod=="debit" &&  <div>
        <label className="block text-[#35653e] mb-1 font-medium">Amount</label>
        <div className="flex items-center border border-[#d4a373] rounded-full p-2">
          <span className="px-3 text-[#35653e]">SEK</span>
          <input
            type="text"
            placeholder="Enter your Amount"
            className="w-full px-4 py-2 text-[#35653e] bg-transparent outline-none rounded-full"
          />
        </div>
        </div>}

      { paymentMethod=="wallet" && <WalletBalance/>}
       {paymentMethod=="credit" && <AddCreditCard/>}
      </div>


    </div>
  );
};

export default PaymentMethods;
