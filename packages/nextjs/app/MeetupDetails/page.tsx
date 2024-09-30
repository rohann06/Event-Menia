import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import MeetupGuestList from "~~/components/(MeetupsDetails)/MeetupGuestList";

const MeetupDetails = () => {
  return (
    <>
      <h1 className=" text-[50px] pl-[20px] font-extrabold text-left md:my-[20px]">My first meetUp🥂</h1>

      <div className=" flex px-[20px] gap-x-20 ">
        <div className=" w-[60%]">
          <p className=" text-justify my-0 text-lg font-medium text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam inventore deserunt ut a laudantium
            accusantium, quia soluta fugiat error nisi nam atque! Illum tempora provident necessitatibus dolorum maxime
            libero aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid eius voluptatum
            numquam atque aperiam excepturi assumenda repudiandae quisquam obcaecati. Deleniti nesciunt maiores autem
            alias minus et, quos nihil omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi ad
            molestiae! Sequi, quisquam rem quibusdam nesciunt provident explicabo eos hic quam commodi ex nobis
            repellendus nam et ducimus eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            similique maiores dolore dolorum consequatur autem nam iste fugit, rem qui voluptates alias ex, ipsa
            repellendus delectus laudantium minus eaque facilis!Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quam inventore deserunt ut a laudantium accusantium, quia soluta fugiat error nisi nam atque! Illum
            tempora provident necessitatibus dolorum maxime libero aspernatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed aliquid eius voluptatum numquam atque aperiam excepturi assumenda repudiandae quisquam
            obcaecati. Deleniti nesciunt maiores autem alias minus et, quos nihil omnis?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Totam commodi ad molestiae! Sequi, quisquam rem quibusdam nesciunt provident
            explicabo eos hic quam commodi ex nobis repellendus nam et ducimus eveniet! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore, similique maiores dolore dolorum consequatur autem nam iste fugit,
            rem qui voluptates alias ex, ipsa repellendus delectus laudantium minus eaque facilis!
          </p>
        </div>
        <div className=" w-[40%] flex flex-col">
          <div className=" h-[300px] w-full overflow-hidden">
            <Image
              alt="coverImage"
              src={"/meetimg.jpg"}
              height={500}
              width={500}
              className="h-full w-full bg-cover bg-center rounded-lg"
            />
          </div>
          <div className=" flex items-center justify-between mt-5">
            <div className=" flex items-center gap-x-3">
              <div className=" flex flex-col  text-center w-[70px] mt-[15px]">
                <div className=" py-[2px] bg-red-600 text-white font-bold text-[15px] rounded-t-[7px]">Sep</div>
                <div className=" py-[4px] border-t border-black bg-white text-black font-bold text-[25px] rounded-b-[7px]">
                  20
                </div>
              </div>
              <div>
                <p className=" flex text-[14px] items-center gap-x-[1px] font-medium opacity-50 mb-2">
                  <span className=" text-lg">
                    <IoLocationSharp />
                  </span>
                  Vadodra
                </p>
                <div className=" flex items-center gap-x-[1px]">
                  <p className=" m-0 font-extralight">📍</p>
                  <a className=" m-0 underline" href="https://maps.app.goo.gl/5cCWqosCbHHWM1wVA" target="_blank">
                    https://maps.app.goo.gl/5cCWqosCbHHWM1wVA
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button className=" bg-neutral text-neutral-content px-[25px] py-[10px] rounded-[5px] hover:scale-105 duration-100 font-medium text-[15px]">
                Register
              </button>
            </div>
          </div>

          <div className=" mt-10">
            {/* <div className=" border-[1px] opacity-40" /> */}
            <p className=" text-sm opacity-60 mt-3 mb-5">Organised by:</p>
            <div className=" flex items-center gap-x-5">
              <p className=" m-0 text-lg">Rohan</p>
              <a
                href="https://x.com/rohann06_"
                target="_blank"
                className=" cursor-pointer text-[15px] p-[5px] rounded-[5px] bg-neutral text-neutral-content"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <MeetupGuestList />
    </>
  );
};

export default MeetupDetails;
