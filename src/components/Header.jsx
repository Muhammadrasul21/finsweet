import React from 'react';
import { navItems } from '../static';

const Header = () => {
  return (
    <>
      <div className="container flex items-center">
        <div className='flex w-full h-16 items-center justify-center md:justify-between '>
        <div>
          <p className='text-3xl font-bold'>finsweet</p>
        </div>
        <ul className="items-center gap-10 hidden md:flex">
          {navItems?.map((item, inx) => (
            <li className='font-medium text-[#525560] hover:text-black cursor-pointer transition duriton-300 ease-in-out' key={inx}>{item}</li>
          ))}
          <button className='bg-black text-white w-28 h-11 rounded-[4px] hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out active:bg-black active:text-white'>Donate</button>
        </ul>
      </div>
        </div>
    </>
  );
};

export default Header;
