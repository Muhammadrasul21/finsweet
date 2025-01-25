import React from 'react';
import { navItems } from '../static';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="container flex items-center">
        <div className='flex w-full items-center justify-center md:justify-between '>
        <div>
          <p className='text-3xl font-bold'>finsweet</p>
        </div>
        <div className="items-center gap-10 hidden md:flex">
          {navItems?.map((item) => (
            <NavLink to={item.path} key={item.id} className='font-medium text-[#525560] hover:text-black cursor-pointer transition duriton-300 ease-in-out'>{item.title}</NavLink>
          ))}
          <button className='bg-black text-white w-28 h-11 cursor-pointer rounded-[4px] hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out active:bg-black active:text-white'>Donate</button>
        </div>
      </div>
        </div>
    </>
  );
};

export default Header;
