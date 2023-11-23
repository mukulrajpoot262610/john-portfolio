import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='h-[85vh] bg-primary-background relative'>
      <main className='max-w-6xl mx-auto w-full h-full flex flex-col justify-center items-center pt-16'>
        <h1 className='text-8xl font-bold my-4'>NICOLAS BROUARD</h1>
        <h3 className='text-2xl font-semibold'>FULLSTACK DEVELOPER</h3>
        <p className='text-xl text-gray-400 max-w-xl mt-4 text-center'>
          My mission is to help you build your projects with my versatility and
          my ability to adapt to different situations. Together, let&apos;s turn
          your ideas into great projects!
        </p>
        <div className='scroll-downs absolute bottom-10'>
          <div className='mousey'>
            <div className='scroller'></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
