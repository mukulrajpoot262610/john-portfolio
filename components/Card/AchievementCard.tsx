import { ArrowRight } from 'lucide-react';
import React from 'react';

type AchievementProps = {
  year: number;
  id: number;
  achievement: string;
  organization: string;
};

const AchievementCard = ({
  year,
  id,
  achievement,
  organization,
}: AchievementProps) => {
  return (
    <div className='flex border-black border-y hover:bg-black group items-center justify-between cursor-pointer p-6 h-40'>
      <div className='text-xl font-bold text-black group-hover:text-white flex w-full gap-10'>
        <p className='w-4/6 font-semibold'>{achievement}</p>
        <h2 className='w-1/6 text-end uppercase font-bold'>{organization}</h2>
        <h2 className='w-1/6 text-end'>{year}</h2>
      </div>
      <ArrowRight className='group-hover:text-black text-white' />
    </div>
  );
};

export default AchievementCard;
