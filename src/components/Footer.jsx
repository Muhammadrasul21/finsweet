import React from "react";
import { footerItems, footerLi, footerUL } from "../static";

const Footer = () => {
  return (
    <div className="footer bg-black text-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <p>finsweet</p>
          <ul className="flex flex-col gap-6">
            <li className="font-bold">Our team</li>
            {footerItems?.map((item, inx) => (
              <li key={inx}>{item}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="font-bold"> More</li>
            {footerUL?.map((item, inx) => (
              <li key={inx}>{item}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="font-bold"> Connect </li>
            {footerLi?.map((item, inx) => (
              <li key={inx}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[40px] w-[440px]">
              Subscribe to get latest updates
            </p>
            <div className="footerBtn border w-[544px] flex justify-between rounded-[4px]">
              <input
                type="text"
                className="text-white "
                placeholder="Your email"
              />
              <button className="bg-white text-black w-[136px] h-16 rounded-[4px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
