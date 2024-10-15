import BillingDetailsSection from "@/_components/BillingDetailsSection";
import DeliveryDetailsSection from "@/_components/DeliveryDetailsSection";
import SummarySection from "@/_components/SummarySection";
import React from "react";

const BillingDetails = () => {
  return (
    <div>
      <BillingDetailsSection />
      <DeliveryDetailsSection />
      <SummarySection/>
    </div>
  );
};

export default BillingDetails;
