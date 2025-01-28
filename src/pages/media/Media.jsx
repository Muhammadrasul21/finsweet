import React from "react";
import Layout from "../../components/Layout";
import { mediaImages } from "../../static/index";
import News from "../../components/News";

const Media = () => {
  return (
    <div className="bg-[#EFF7F2]">
      <Layout>
        <div className="container">
          <div className="infoWrapper">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-8 w-[496px]">
                <div className="flex items-center gap-6">
                  <hr className="w-[72px]" />
                  <p className="font-bold">Top news</p>
                </div>
                <div className="title flex flex-col gap-4">
                  <p className=" font-bold text-5xl">
                    Our goal is to make water available for everyone
                  </p>
                  <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                  <div>
                    <button className="bg-[#70C174] w-[146px] h-[50px] text-white rounded-[4px] hover:bg-white hover:text-black border transition duration-300 ease-in-out">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 bg-white w-[592px] h-[576px] items-center justify-center rounded-[12px]">
                {mediaImages?.map((item) => (
                  <div key={item.id} className="flex w-[512px] gap-6">
                    <img src={item.img} alt={item.tble} className="media-img" />
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-[20px]">{item.title}</p>
                      <p className="media-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <News />
        </div>
      </Layout>
    </div>
  );
};

export default Media;
