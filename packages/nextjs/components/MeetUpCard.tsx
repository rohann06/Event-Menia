"use client";

import React from "react";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

// import { CiCalendar } from "react-icons/ci";

const MeetUpCard = () => {
  return (
    <div className="border rounded-[15px] w-[350px]">
      <div className="flex flex-col py-4 p-3">
        <div className="h-[180px] rounded-[10px] overflow-hidden">
          <Image
            alt="coverImage"
            src={"/meetimg.jpg"}
            height={500}
            width={500}
            className="h-full w-full bg-cover scale-100 hover:scale-105 duration-150"
          />
        </div>
        <div>
          <p className="font-bold md:text-[20px]">My first meetUp🥂</p>
          <p className=" text-xs flex justify-between items-center gap-x-1 font-extralight">
            <span>
              By <span className=" text-base font-medium"> Rohan</span>
            </span>
            <span className=" cursor-pointer border p-[4px] rounded-full hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black">
              <FaXTwitter />
            </span>
          </p>
        </div>
        <div className=" flex justify-between items-center gap-x-5 h-[45px] my-3">
          <div className=" flex flex-col items-center">
            <div className=" px-[15px] bg-red-600 text-white font-bold text-sm rounded-t-[7px]">Sep</div>
            <div className=" py-1 px-[16px] border-t border-black bg-white text-black font-bold text-[20px] rounded-b-[7px]">
              20
            </div>
          </div>
          <div className=" text-sm opacity-50">
            <p className=" flex items-center gap-x-1">
              <span>
                <CiGlobe />
              </span>
              10:00am IST
            </p>
            <p className=" flex items-center gap-x-1">
              <span>
                <GrLocation />
              </span>
              Vadodra
            </p>
          </div>
          <div>
            <div className=" bg-info text-xs px-3 py-1 rounded-[5px] font-bold">Virtual</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUpCard;
