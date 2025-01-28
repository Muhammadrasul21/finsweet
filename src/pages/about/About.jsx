import React from "react";
import Layout from "../../components/Layout";
import bgtwo from "../../assets/bg2.png";
import Supporters from "../../components/Supporters";
const About = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="infoWrapper">
            <div className="flex flex-col items-center justify-center gap-24">
              <div className="flex">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6">
                    <hr className="w-[72px]" />
                    <p className="font-bold">KNOW ABOUT US</p>
                  </div>
                  <p className="title font-bold text-5xl w-[624px]">
                    We are a nonprofit team working worldwide
                  </p>
                </div>
                <div className="w-[600px] flex flex-col gap-4">
                  <p className="font-bold text-[20px]">
                    Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    elementum tristique.
                  </p>
                  <div></div>
                </div>
              </div>
              <div className="img">
                <img src={bgtwo} alt="" />
              </div>
              <div className="flex items-center gap-24">
                <div className="w-[496px] flex flex-col gap-4">
                  <p className="font-bold tracking-[2px] leading-3">
                    our mission
                  </p>
                  <p className="font-bold text-[28px] ">
                    We make the world we save our own environment
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                </div>
                <div className="w-[496px] flex flex-col gap-4">
                  <p className="font-bold tracking-[2px] leading-3">
                    our Vision
                  </p>
                  <p className="font-bold text-[28px] ">
                    Plant more trees to make world air pollution free
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                </div>
              </div>
              <Supporters />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
