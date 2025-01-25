import React from 'react';
import bg from "../assets/bg.png";
import { IoPlay } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div
        className=" text-white"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='container hero'>
        <h2 className=' font-bold text-[64px] w-[670px]'>Save the environment today for a better tomorrow</h2>
        <div className='heroBtn flex gap-6'>
          <button className='w-[148px] h-[50px] rounded-[4px] hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer'>What we do</button>
          <button className='flex items-center justify-center gap-1 w-[148px] h-[50px] rounded-[4px] hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer'><p className='bg-white w-6 h-6 flex items-center justify-center rounded-full text-black'><IoPlay className='translate-x-[10%]'/></p> Play Video</button>
        </div>
        <div className='flex justify-between items-center'>
          <p>23,800 trees planted</p>
          <hr className='w-[860px]'/>
          <p>5840 donations collected</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
