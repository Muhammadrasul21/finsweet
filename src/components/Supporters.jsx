import React from "react";
import { logos } from "../static";

const Supporters = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center gap-6">
          <p>Our Supporters</p>
          <hr className="w-[1094px]" />
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex gap-24">
            {logos?.map((item, inx) => (
              <img
                className="logos"
                key={inx}
                src={item}
                alt={`Supporter ${inx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Supporters;
