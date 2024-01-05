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
    <div className='flex border-black border-y hover:bg-black group items-center justify-between cursor-pointer p-6 min-h-32'>
      <div className='text-sm lg:text-xl font-bold text-black group-hover:text-white flex lg:flex-row flex-col w-full gap-2'>
        <p className='w-full lg:w-5/6'>{achievement}.</p>
      </div>
    </div>
  );
};

export default AchievementCard;
