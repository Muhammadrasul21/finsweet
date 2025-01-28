import React from "react";
import doggy from "../assets/doggy.png";
import { careItems } from "../static/index";

const Care = () => {
  return (
    <div className="bg-[#EFF7F2] care">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-8 w-[600px]">
            <div className="flex items-center gap-6">
              <hr className="w-[72px]" />
              <p className="font-bold">WHAT WE DO</p>
            </div>

            <p className="font-bold text-5xl ">
              We care for earth, care for the coming birth
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="flex flex-col w-[436px] gap-6">
              {careItems?.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-14 h-8 bg-[#83D187] text-[#DDFFDF] flex items-center justify-center rounded-[4px]">
                    {React.createElement(item.icon)}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <img src={doggy} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
