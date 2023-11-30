'use client';

import {
  AwardIcon,
  Briefcase,
  HammerIcon,
  HomeIcon,
  PhoneCall,
  User,
  User2,
  User2Icon,
} from 'lucide-react';
import Link from 'next/link';
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
        isScrolled
          ? 'bg-black text-white h-12'
          : 'bg-transparent h-16 text-white'
      } fixed top-0 left-0 w-screen z-50 transition-all duration-500 p-10`}
    >
      <div className='flex justify-between items-center max-w-6xl mx-auto h-full'>
        <Link href='/'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            <p className='uppercase font-semibold text-sm hidden lg:block'>
              Home
            </p>
            <HomeIcon className='lg:hidden' />
          </div>
        </Link>
        <Link href='#about'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            <p className=' uppercase font-semibold text-sm hidden lg:block'>
              About
            </p>
            <User2 className='lg:hidden' />
          </div>
        </Link>
        <Link href='#experience'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            <p className=' uppercase font-semibold text-sm hidden lg:block'>
              Experiences
            </p>
            <Briefcase className='lg:hidden' />
          </div>
        </Link>
        <Link href='#projects'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            <p className=' uppercase font-semibold text-sm hidden lg:block'>
              Projects
            </p>
            <HammerIcon className='lg:hidden' />
          </div>
        </Link>
        <Link href='#achievements'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            <p className=' uppercase font-semibold text-sm hidden lg:block'>
              Achievements
            </p>
            <AwardIcon className='lg:hidden' />
          </div>
        </Link>
        <Link href='#contact'>
          <div className='w-fit flex flex-col justify-end items-end cursor-pointer'>
            <p className=' uppercase font-semibold text-sm hidden lg:block'>
              Contact
            </p>
            <PhoneCall className='lg:hidden' />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
