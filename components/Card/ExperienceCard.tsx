import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Locate, LocateIcon, MapPin } from 'lucide-react';

type WorkExperienceProps = {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string[];
  id: string;
};

const ExperienceCard = ({
  position,
  company,
  location,
  startDate,
  endDate,
  responsibilities,
  id,
}: WorkExperienceProps) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className='w-full text-sm lg:text-xl'>
        <div className='flex lg:flex-row flex-col justify-between items-start lg:items-center w-full text-base lg:text-xl'>
          <p className='w-full lg:w-2/3 text-start'>
            {position} @ {company}
          </p>
          <p className='text-left lg:text-end w-full lg:w-1/3 pr-10 font-normal'>
            {startDate} - {endDate}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent className='bg-black text-white rounded-lg p-4 lg:p-6'>
        <div className='flex items-center gap-1'>
          <MapPin className='h-5' />
          <span>{location}</span>
        </div>
        <p className='text-sm mt-2 lg:text-lg leading-relaxed'>
          {responsibilities}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExperienceCard;
