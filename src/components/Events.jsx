import { eventItems } from "@/static";
import React from "react";

const Events = () => {
  return (
    <div className="container">
      <div className="infoWrapper flex flex-col gap-12">
        <div className="flex gap-6 items-center justify-between">
          <p className="font-medium text-[40px]">Our Events</p>
          <hr className="w-[1055px] border-gray-200" />
        </div>

        <div className="flex items-center justify-between gap-6">
          {eventItems?.map((item) => (
            <div
              key={item.id}
              className="eventCard w-[628px] bg-[#BEF3C0] rounded-[8px] flex items-center gap-6 h-[190px]"
            >
              <div className="flex flex-col">
                <p className="font-medium text-5xl">{item.num}</p>
                <p className="font-medium">{item.date}</p>
              </div>

              <div>
                <div className="flex">
                  <p>{item.name}</p>
                  <hr />
                </div>
                <p className="font-bold text-[28px] w-[381px]">{item.title}</p>
              </div>

              <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full ">
                <item.icon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
