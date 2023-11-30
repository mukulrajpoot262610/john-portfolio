import React from 'react';
import { Button } from '../ui/button';
import { Lightbulb, Mail, Paperclip } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='h-screen relative'>
      <img
        src='/bg.jpg'
        className='absolute top-0 left-0 h-full w-full z-0 select-none'
      />
      <main className='max-w-6xl mx-auto w-full h-full flex flex-col justify-center items-center pt-16 z-20 relative'>
        <h1 className='text-9xl font-bold my-4 text-white font-bebas'>
          J. JOHN ROHIT ERNEST
        </h1>

        <p className='text-xl text-gray-200 max-w-3xl mt-4 text-center'>
          Passionate AI Enthusiast Pursuing Graduate Studies: Driving Innovation
          in Machine Learning and Deep Learning for Groundbreaking Research and
          Development
        </p>

        <div className='my-12 flex gap-4'>
          <Button variant='outline'>
            <Paperclip className='mr-2 h-4 w-4' /> Download CV
          </Button>
          <Link href='#projects'>
            <Button className='border-white border'>
              <Lightbulb className='mr-2 h-4 w-4' /> Check my Projects
            </Button>
          </Link>
        </div>

        <div className='scroll-downs absolute bottom-10'>
          <div className='mousey'>
            <div className='scrollermouse'></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
