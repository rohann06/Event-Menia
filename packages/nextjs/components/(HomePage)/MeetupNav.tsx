"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MeetupNav = () => {
  const pathname = usePathname();
  return (
    <div
      className={`mx-6 flex items-center justify-center mb-10 gap-x-10 font-bold text-sm ${
        pathname !== "/" && "hidden"
      }`}
    >
      <Link href={"/"}>
        <div
          className={` ${
            pathname == "/"
              ? "dark:border-white border-neutral border-b-2 text-primary-content"
              : "text-zinc-400 dark:text-gray-500"
          } `}
        >
          <p className=" mb-2">Up Comming Meetups</p>
        </div>
      </Link>
      <Link href={"/PreviousMeetups"}>
        <div
          className={` ${
            pathname == "/PreviousMeetups"
              ? "dark:border-white border-neutral  border-b-2 text-primary-content"
              : "text-zinc-400 dark:text-gray-500"
          } `}
        >
          <p className="mb-2">Previous Meetups</p>
        </div>
      </Link>
      <div className=" md:mt-2">
        <select
          className=" outline-none font-medium bg-transparent  px-[20px] text-center py-1 rounded-[10px] "
          name="meetType"
        >
          <option value="volvo">All</option>
          <option value="saab">Virtual</option>
          <option value="mercedes">IRL</option>
        </select>
      </div>
    </div>
  );
};

export default MeetupNav;
