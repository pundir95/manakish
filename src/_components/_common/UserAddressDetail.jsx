import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

const UserAddressDetail = () => {
  return (
    <>
    <div className="text-black mb-3">Address Details</div>
    <div className="flex gap-4 mb-3">
    <div className="flex text-black items-center gap-2 text-sm">
      <div>
          <FaRegUser />
        </div>
        <div className="">Dummy User  |  +987 654 321 1230</div>
    </div>
    <div className="flex text-black items-center gap-2 text-sm">
    <div>
    <IoIosHome />
        </div>
        <div className="">Storgatan 25, Stockholm, Sweden  |   114 56</div>
    </div>
    </div>
    </>
  );
};

export default UserAddressDetail;
