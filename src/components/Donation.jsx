import React from "react";
import chart from "@/assets/chart.png";
import { colors } from "@/static";
const Donation = () => {
  return (
    <div className="bg-black btn">
      <div className="container">
        <div className="diagram flex justify-between items-center">
          <div className="text-white w-[650px] btn">
            <p className="font-bold text-5xl">
              How we spend your donations and where it goes
            </p>
            <p>
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
            <div className="flex flex-wrap gap-6">
              {colors?.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <div
                    className="w-4 h-4 rounded-[4px]"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={chart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
