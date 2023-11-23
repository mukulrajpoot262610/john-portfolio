'use client';

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'bg-black text-white h-12' : 'bg-transparent h-16'
      } fixed top-0 left-0 w-full z-50 transition-all duration-500`}
    >
      <div className='flex justify-between items-center max-w-6xl mx-auto h-full'>
        <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
          <span className='text-[10px] -mb-1 font-bold'>01</span>
          <p className=' uppercase font-semibold text-sm'>Home</p>
        </div>
        <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
          <span className='text-[10px] -mb-1 font-bold'>02</span>
          <p className=' uppercase font-semibold text-sm'>Work</p>
        </div>
        <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
          <span className='text-[10px] -mb-1 font-bold'>03</span>
          <p className=' uppercase font-semibold text-sm'>Awards</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
