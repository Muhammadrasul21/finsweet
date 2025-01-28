import { projectItems } from "@/static";
import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8 w-[600px]">
        <div className="flex items-center gap-6">
          <hr className="w-[72px]" />
          <p className="font-bold">WHAT WE DO</p>
        </div>

        <p className="font-bold text-5xl ">
          We care for earth, care for the coming birth
        </p>
      </div>
      <div className="flex justify-between text-white btn">
        {projectItems?.map((item) => (
          <div
            className="w-[411px] h-[421px]"
            key={item.id}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" w-full h-full bg-[#00000069] rounded-xl flex items-center justify-center">
              <div className="w-[315px] flex flex-col gap-4">
                <p className="font-bold text-[28px]">{item.title}</p>
                <p>{item.desc}</p>
                <button className="btn w-[132px] h-[50px] bg-white rounded-[4px] text-black">
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
