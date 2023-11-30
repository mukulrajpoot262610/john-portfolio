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
      <AccordionTrigger className='flex justify-between items-center w-full text-xl'>
        <p className='w-1/2 text-start'>
          {position} @ {company}
        </p>
        <p className='text-end w-1/2 pr-10'>
          {startDate} - {endDate}
        </p>
      </AccordionTrigger>
      <AccordionContent className='bg-black text-white rounded-lg p-6'>
        <div className='p-2 flex items-center gap-1'>
          <MapPin className='h-5' />
          <span>{location}</span>
        </div>
        <p className='p-2 text-lg'>{responsibilities}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExperienceCard;
