import React from "react";
import journey from "@/assets/journey.png";
const Journey = () => {
  return (
    <div className="w-full flex justify-center infoWrapper">
      <div className=" bg-black text-white w-[1400px] rounded-xl">
        <div className="">
          <div className="flex justify-between items-center journeyImg ">
            <div className=" flex flex-col gap-4 w-[488px]">
              <p className="font-bold">OUR JOURNEY </p>
              <p className="font-bold text-5xl">How we raised 34M</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-medium text-2xl">34M+</p>
                  <p className="font-medium text-[12px]">Donation Received</p>
                </div>
                <div>
                  <p className="font-medium text-2xl">400+</p>
                  <p className="font-medium text-[12px]">Volunters</p>
                </div>
                <div>
                  <p className="font-medium text-2xl">40K+</p>
                  <p className="font-medium text-[12px]">Trees planted</p>
                </div>
              </div>
            </div>
            <div className="w-[647px] h-[448px]">
              <img className="w-full" src={journey} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
