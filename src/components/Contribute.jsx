import React from "react";
import image from "@/assets/image.png";

const Contribute = () => {
  return (
    <div className="container infoWrapper">
      <div
        className=" h-[384px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full bg-[#00000057] text-white flex items-center justify-center rounded-xl">
          <div className="w-[631px] flex flex-col gap-8 text-center items-center">
            <p className="font-bold text-5xl">
              You can contribute to make the environment greener!
            </p>
            <div className="flex gap-8">
              <button className="bg-[#70C174] text-white w-[200px] h-[50px] rounded-[4px] font-medium">
                Join as a volunteer
              </button>
              <button className="bg-white text-black w-[116px] h-[50px] rounded-[4px]">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
