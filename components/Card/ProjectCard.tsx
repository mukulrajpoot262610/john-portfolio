import React from 'react';

interface ProjectCardProps {
  id: number;
  title: string;
  summary: string;
  duration?: string | null;
  technologies_used: string[];
  team_size: number | null;
  image: string;
}

const ProjectCard = ({
  id,
  title,
  summary,
  duration,
  technologies_used,
  team_size,
  image,
}: ProjectCardProps) => {
  return (
    <div className='border h-80 overflow-hidden w-96 p-4 rounded-lg hover:bg-black group'>
      <div className='justify-between items-center flex bg-frosted'>
        <div className='flex'>
          <span className='w-4 h-4 bg-red-500 rounded-full cursor-pointer'></span>
          <span className='w-4 h-4 mx-2 bg-yellow-500 rounded-full'></span>
          <span className='w-4 h-4 bg-green-500 rounded-full'></span>
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-bold my-4 group-hover:text-white'>
          {title}
        </h1>
        <p className='group-hover:text-white line-clamp-6'>{summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;