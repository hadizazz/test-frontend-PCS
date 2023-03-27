import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { RiCalendarCheckFill } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { TbNotes } from "react-icons/tb";
import { RiSettings2Fill } from "react-icons/ri";

const BotNav = () => {
  const Menus = [
    { name: "Home", icon: <IoHome />, link: "/", dis: "translate-x-0" },
    {
      name: "Attendance",
      icon: <RiCalendarCheckFill />,
      link: "/attendance",
      dis: "translate-x-0",
    },
    {
      name: "CheckOut",
      icon: <ImExit />,
      link: "checkout",
      dis: "translate-x-0",
    },
    { name: "Form", icon: <TbNotes />, link: "form", dis: "translate-x-0" },
    {
      name: "Setting",
      icon: <RiSettings2Fill />,
      link: "setting",
      dis: "translate-x-0",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-rose-600 shadow bottom-0 fixed max-h-[4.4rem] px-6 rounded-t-xl">
      <ul className="flex justify-center relative ">
        {Menus.map((menu, i) => {
          return (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span className="text-xl cursor-pointer ml-5">{menu.icon}</span>
                <span
                  className={`${
                    active === i
                      ? " duration-700 opacity-100 "
                      : "text-red-600 opacity-0 translate-y-10 text-xs hidden"
                  }`}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BotNav;
