import React from "react";
import { environmentItems } from "../static/index";

const Environment = () => {
  return (
    <div className="bg-[#EFF7F2] py-10">
      <div className="container mx-auto desc">
        <p className="font-bold text-5xl">What we do for the environment</p>
        <div className="grid grid-cols-3 gap-16">
          {environmentItems?.map((item) => (
            <div
              key={item.id}
              className="flex gap-6"
            >
              <div className="w-18 h-8 bg-[#83D187] text-[#DDFFDF] flex items-center justify-center rounded-[4px]">
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
    </div>
  );
};

export default Environment;
