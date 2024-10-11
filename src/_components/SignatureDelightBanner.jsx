import React from "react";

const SignatureDelightBanner = () => {
  return (
    <>
      <div className="bg-[url('/images/signature-delight-banner.png')] bg-cover bg-center h-64 flex items-center justify-center text-center">
        <div className="text-white">
          {" "}
          {/* Add text color for contrast */}
          <h1 className="font-gabarito font-normal text-[65px] leading-[78px] text-center text-[#0A0A0A]">
            Dive deep into our Bakery’s Signature Delights
          </h1>
          <p className="font-gabarito font-normal text-[20px] leading-[78px] text-center text-[#595959]">
            Indulge in a symphony of flavors as we present our bakery’s
            signature delights, masterfully crafted to awaken your senses and
            leave you longing for every irresistible bite.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default SignatureDelightBanner;
