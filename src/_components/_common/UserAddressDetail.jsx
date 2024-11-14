import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

const UserAddressDetail = () => {
  return (
    <div className="flex space-x-6 m-4 text-gray-700">
      <div className="flex items-center space-x-2">
        <span>
          <FaRegUser />
        </span>
        <div className="font-semibold">Dummy User</div>
      </div>

      <div className="flex items-center space-x-2">
        <span>
          <FaPhone />
        </span>
        <div>+987 654 321 1230</div>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <span>
            <IoIosHome />
          </span>
          <div>Storgatan 25, Stockholm, Sweden</div>

          <div> | 114 56</div>
        </div>
      </div>
    </div>
  );
};

export default UserAddressDetail;
