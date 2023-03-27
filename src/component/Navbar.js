import React from "react";
import { MdNotificationsNone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex flex items-center justify-between py-4 md:px-10 px-1">
        <div>
          <h1 className="text-2xl text-red-600 font-bold">KerjaYuk!</h1>
        </div>
        <div>
          <a href="/notification">
            <MdNotificationsNone className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
