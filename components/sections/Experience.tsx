import EXPERIENCE from '@/public/experience';
import React from 'react';
import ExperienceCard from '../Card/ExperienceCard';
import { Accordion } from '../ui/accordion';

const Experience = () => {
  return (
    <div className=''>
      <h1 className='text-9xl uppercase font-black text-center font-bebas mt-10'>
        EXPERIENCE
      </h1>
      <main className='h-[60vh] max-w-6xl mx-auto w-full flex flex-col justify-center items-center gap-4 place-items-center'>
        <Accordion type='single' collapsible className='w-full'>
          {EXPERIENCE.map((exp) => (
            <ExperienceCard
              key={exp.company}
              company={exp.company}
              endDate={exp.endDate}
              startDate={exp.startDate}
              location={exp.location}
              responsibilities={exp.responsibilities}
              position={exp.position}
              id={exp.id.toString()}
            />
          ))}
        </Accordion>
      </main>
    </div>
  );
};

export default Experience;
