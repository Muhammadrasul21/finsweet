import React from "react";
import Layout from "../../components/Layout";
import Work from "../../assets/work.png";
import Environment from "../../components/environment";
const whatWeDo = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="infoWrapper">
            <div className="flex justify-between">
              <div className="flex flex-col gap-8 w-[600px]">
                <div className="flex items-center gap-6">
                  <hr className="w-[72px]" />
                  <p className="font-bold">What we do</p>
                </div>
                <p className="font-bold text-5xl ">We are working worldwide</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div></div>
              </div>
              <div>
                <img src={Work} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Environment />
      </Layout>
    </>
  );
};

export default whatWeDo;
