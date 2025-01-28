import { awardItems } from "@/static";
import React from "react";

const Awards = () => {
  return (
    <div className="container">
      <div className="infoWrapper flex flex-col gap-12 text-center">
        <p className="font-bold text-5xl">Awards & Recognitions</p>
        <div className="flex justify-between">
          {awardItems?.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <img src={item.img} alt="" />
              <p className="font-bold text-2xl year">{item.num}</p>
              <p className="font-bold">{item.title}</p>
              <p className="text-[14px] text-[#1D2130]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
