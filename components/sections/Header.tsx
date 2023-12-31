import React from 'react';
import { Button } from '../ui/button';
import { Lightbulb, Paperclip } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='h-screen relative'>
      <img
        src='/bg1.jpg'
        className='absolute top-0 left-0 h-full w-full z-0 select-none bg-cover object-cover brightness-50'
      />
      <main className='max-w-6xl mx-auto w-full h-full flex flex-col justify-center items-start lg:items-center pt-16 z-20 relative p-10'>
        <h1 className='text-7xl lg:text-[140px] font-bold my-2 text-white font-bebas text-left'>
          JOHN ROHIT ERNEST
        </h1>

        <p className='text-lg lg:text-2xl text-gray-200 max-w-4xl mt-4 text-left lg:text-center font-bold'>
          Leveraging my passion for machine learning and deep learning to
          contribute to groundbreaking research and development. Seeking an
          opportunity in Master&apos;s to expand my expertise and aiming to be
          at the forefront of{' '}
          <span className='font-bold'>AI advancement&apos;s</span>
        </p>

        <div className='my-12 flex gap-4 flex-col lg:flex-row'>
          <a
            href='https://drive.google.com/file/d/1nnsZBhslLUvYJUaqBLHkQbwII81DqSQV/view?usp=sharing'
            target='_blank'
          >
            <Button variant='outline'>
              <Paperclip className='mr-2 h-4 w-4' /> Download CV
            </Button>
          </a>
          <Link href='#projects'>
            <Button className='border-white border'>
              <Lightbulb className='mr-2 h-4 w-4' /> Check my Projects
            </Button>
          </Link>
        </div>

        <div className='scroll-downs absolute bottom-10 hidden lg:block'>
          <div className='mousey'>
            <div className='scrollermouse'></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
