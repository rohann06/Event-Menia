import React from "react";
import Image from "next/image";

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
          <div>
            <div>
              <div className=" flex flex-col  text-center w-[95px] mt-[15px]">
                <div className=" py-[5px] bg-red-600 text-white font-bold text-[17px] rounded-t-[7px]">Sep</div>
                <div className=" py-[5px] border-t border-black bg-white text-black font-bold text-[30px] rounded-b-[7px]">
                  20
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetupDetails;
