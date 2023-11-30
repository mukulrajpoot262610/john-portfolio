import { ArrowRight } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='flex  border-white border-y hover:bg-white group items-center w-screen p-6 lg:p-12 justify-between cursor-pointer'>
        <h1 className='text-2xl lg:text-5xl font-bold text-white group-hover:text-black'>
          CALL ME
        </h1>
        <ArrowRight className='group-hover:text-black text-white' />
      </div>
      <div className='flex  border-white border-y hover:bg-white group items-center w-screen p-6 lg:p-12 justify-between cursor-pointer'>
        <h1 className='text-2xl lg:text-5xl font-bold text-white group-hover:text-black'>
          MAIL
        </h1>
        <ArrowRight className='group-hover:text-black text-white' />
      </div>
      <div className='flex  border-white border-y hover:bg-white group items-center w-screen p-6 lg:p-12 justify-between cursor-pointer'>
        <h1 className='text-2xl lg:text-5xl font-bold text-white group-hover:text-black'>
          LINKEDIN
        </h1>
        <ArrowRight className='group-hover:text-black text-white' />
      </div>
      <div className='flex  border-white border-y hover:bg-white group items-center w-screen p-6 lg:p-12 justify-between cursor-pointer'>
        <h1 className='text-2xl lg:text-5xl font-bold text-white group-hover:text-black'>
          READ.CV
        </h1>
        <ArrowRight className='group-hover:text-black text-white' />
      </div>
    </div>
  );
};

export default Footer;
