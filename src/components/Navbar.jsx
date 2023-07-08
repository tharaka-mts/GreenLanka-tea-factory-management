import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex">
      <ul className="flex gap-6 text-2xl cursor-pointer flex-row-reverse">
        <li>
          <AiOutlineUser />
        </li>
        <li>
          <IoNotificationsOutline />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
