"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MeetupNav = () => {
  const pathname = usePathname();
  return (
    <div className=" mx-6 flex items-center gap-x-10 font-bold text-sm">
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
              ? "border-white border-b-2 text-primary-content"
              : "text-zinc-400 dark:text-gray-500"
          } `}
        >
          <p className="mb-2">Previous Meetups</p>
        </div>
      </Link>
    </div>
  );
};

export default MeetupNav;
