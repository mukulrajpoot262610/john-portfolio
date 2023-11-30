import React from 'react';

const Contact = () => {
  return (
    <div className='h-screen justify-center bg-black text-white flex items-center'>
      <div className=' w-screen justify-center flex-col flex items-center '>
        <div>
          <h1 className='text-9xl font-bold pb-64 font-bebas'>CONTACT</h1>
        </div>
        <div className='w-9/12'>
          <h1 className='text-2xl'>
            Let&apos;s collaborate and start a conversation!
          </h1>
          <h1 className='pt-12'>
            <a
              href='mailto:johnrohit94@gmail.com'
              className='gmail text-xl text-white underline '
            >
              johnrohit94@gmail.com
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
