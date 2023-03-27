import React from "react";
import profile from "../assets/profile (1).jpg";
import { TbClockHour8, TbClockStop } from "react-icons/tb";
import { GrRotateRight } from "react-icons/gr";

const Home = () => {
  return (
    <div className="h-max w-full ">
      <div className="flex justify-start px-1">
        <p>Hi, Good Morning!</p>
      </div>
      <div className="p-6 border text-white border-white rounded-lg shadow dark:bg-rose-600 dark:border-gray-300 ">
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={profile}
              className=" w-10 h-10 rounded-full object-cover"
            />
            <div className="text-start pl-3">
              <p className="text-2md font-bold ">Tabay</p>
              <p className="italic text-xs">UI/UX Designer</p>
            </div>
          </div>
          <div>
            <p>Member sice</p>
            <p>01 Juni 2021</p>
          </div>
        </div>
        <div className="text-start pt-2">
          <p className="text-xs">Location</p>
          <div className="flex justify-between">
            <p>Kantor Sahid</p>
            <p className="italic text-sm">ico</p>
          </div>
        </div>
      </div>

      <div name="activity">
        <p className="text-start px-5 py-5 text-xl font-semibold ">
          Today's activity
        </p>
        <div className="flex justify-around  items-center text-center">
          <div className="items-center">
            <TbClockHour8 className="text-4xl ml-2 text-red-600" />
            <p className="text-xl text-start pt-5 font-bold">08.30</p>
            <p className="text-sm">Check in</p>
          </div>
          <div className="">
            <GrRotateRight className="text-4xl text-red-600 ml-5 text-center  items-center" />
            <p className="text-xl text-start pt-5 font-bold text-red-600">
              03:00:00
            </p>
            <p className="text-sm">Working Hours</p>
          </div>
          <div>
            <TbClockStop className="text-4xl ml-2 text-red-600" />
            <p className="text-xl text-center pt-5">--:--</p>
            <p className="text-sm">Check out</p>
          </div>
        </div>
      </div>

      <div name="PCS-News" className="mx-2 my-2">
        <p className="text-start px-2 py-5 text-xl font-semibold">PCS News</p>
        <div className=" p-6 border border-white rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src={profile}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="text-red-600 font-bold pl-5 pt-2">Ana Riswati</p>
            </div>
            <div className="text-xs text-end">
              <p>Senin</p>
              <p>30 Mei 2022</p>
            </div>
          </div>
          <div className="text-sm pt-5 mx-auto">
            <p>Kalimat 1 - Lorem ipsum dolor sit amet consec</p>
            <p>Kalimat 2 - Lorem ipsum dolor sit amet consec</p>
            <p>Kalimat 3 - Lorem ipsum dolor sit amet consec</p>
            <p>Kalimat 4 - Lorem ipsum dolor sit amet consec</p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <p className="text-start px-5 py-5 text-xl font-semibold">Online</p>
        <div className="p-6 border border-white rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="flex justify-around">
            <div className="text-center justify-center">
              <img
                src={profile}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="font-bold text-center">Jefril</p>
              <p className="text-xs text-center">Sahid</p>
            </div>
            <div className="text-center justify-center">
              <img
                src={profile}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="font-bold text-center">Nesha</p>
              <p className="text-xs text-center ">WHF</p>
            </div>
            <div className="text-center justify-center">
              <img
                src={profile}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="font-bold text-center">Jefril</p>
              <p className="text-xs text-center">Sahid</p>
            </div>
            <div className="text-center justify-center">
              <img
                src={profile}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="font-bold text-center">Nesha</p>
              <p className="text-xs text-center ">WHF</p>
            </div>
            <div className="p-2 h-16 w-16 bg-rose-600 rounded-full border-solid border-2">
              <p className="text-white">10 More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
