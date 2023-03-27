import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";

const Notification = () => {
  return (
    <div className="mx-auto w-full ">
      <div className="flex shadow-md">
        <a href="/">
          <BsArrowLeft className="text-3xl cursor-pointer mx-4" />
        </a>
        <p className="text-xl">Notification</p>
      </div>
      <div className="mx-1 mt-2 w-full bg-sky-100 flex">
        <div className="bg-red-600 w-10 h-10 flex justify-center items-center">
          <FaCoins className="text-yellow-200 text-3xl " />
        </div>
        <div className="px-2 text-start">
          <p className="font-bold ">Reimbursement</p>
          <p className="">
            Your submission "Lorem ipsum dolor sit amet..." with the" with a
            total cost of 50,000 hasa been{" "}
            <span className="font-bold">paid</span>, please check your BRIMO
            application, Thank you
          </p>
        </div>
      </div>
      <div className="mx-1 w-full mt-2 flex">
        <div className="bg-red-600 w-10 h-10 flex justify-center items-center">
          <FaCoins className="text-yellow-200 text-3xl " />
        </div>
        <div className="px-2 text-start">
          <p className="font-bold ">Reimbursement</p>
          <p className="">
            Your submission "Lorem ipsum dolor sit amet..." with the" with a
            total cost of 50,000 hasa been{" "}
            <span className="font-bold">paid</span>, please check your BRIMO
            application, Thank you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
