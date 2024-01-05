import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-[75vh] text-white w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className=' w-screen justify-center flex-col flex items-center my-32'>
        <div>
          <h1 className='text-7xl lg:text-9xl font-bold pb-20 font-bebas'>
            CONTACT
          </h1>
        </div>
        <div className='w-9/12 text-center'>
          <h1 className='text-lg lg:text-2xl max-w-3xl text-center mx-auto'>
            <span className='font-bold'>
              Feel free to use the contact details below, and I&apos;ll get back
              to you as soon as possible.
            </span>
          </h1>
          <h1 className='text-3xl font-bold mt-16'> Contact Information</h1>
          <h1 className='pt-6 flex-col flex gap-4'>
            <a
              href='mailto:johnrohit94@gmail.com'
              className='gmail text-xl text-white underline'
            >
              johnrohit94@gmail.com
            </a>
            <a
              href='tel:+91 9080535804'
              className='gmail text-xl text-white underline'
            >
              +91 9080535804
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
