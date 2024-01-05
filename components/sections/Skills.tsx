import SKILLS from '@/public/skills';
import React from 'react';

const Skills = () => {
  return (
    <div className='min-h-[75vh] text-white w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className=' w-screen justify-center flex-col flex items-center mt-20 mb-10'>
        <div>
          <h1 className='text-7xl lg:text-9xl font-bold pb-20 font-bebas'>
            Skills
          </h1>
        </div>
        <div className='text-white lg:leading-relaxed w-full grid grid-cols-4'>
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <h1 className='text-sm font-bold my-2'>{skill.category}</h1>
              <div className='flex items-center flex-wrap gap-2 mb-6'>
                {skill.skills.map((s) => (
                  <p
                    className='text-sm border border-white p-1 px-4 rounded-lg'
                    key={s}
                  >
                    {s}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
