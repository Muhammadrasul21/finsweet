import { teamItems } from "@/static";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="container">
      <div className="infoWrapper text-center flex flex-col gap-4 items-center">
        <p className="font-bold text-5xl">Meet our team</p>
        <p className="text-[#525560] w-[519px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="grid grid-cols-4 gap-8">
          {teamItems?.map((item) => (
            <div className="flex flex-col items-center gap-4" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div>
                <p className="font-medium text-[20px]">{item.name}</p>
                <p className="font-medium text-[12px]">{item.job}</p>
              </div>
              <div className="flex gap-5">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
