import React from 'react';
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <>
      <div
        className="container text-white"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <p>Hero</p>
      </div>
    </>
  );
};

export default Hero;
