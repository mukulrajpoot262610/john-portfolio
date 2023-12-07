import React from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Cross } from 'lucide-react';

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
    <div className='border h-64 overflow-hidden w-96 p-4 rounded-lg hover:bg-black group'>
      <div className='justify-between items-center flex bg-frosted'>
        <div className='flex'>
          <span className='w-3 h-3 bg-red-500 rounded-full cursor-pointer'></span>
          <span className='w-3 h-3 mx-2 bg-yellow-500 rounded-full'></span>
          <span className='w-3 h-3 bg-green-500 rounded-full'></span>
        </div>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div>
            <h1 className='text-lg lg:text-2xl font-bold my-4 group-hover:text-white'>
              {title}
            </h1>
            <p className='group-hover:text-white line-clamp-4'>{summary}</p>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className='flex justify-between items-center'>
              <AlertDialogCancel className='border-0 m-0 p-0'>
                <span className='w-3 h-3 bg-red-500 rounded-full cursor-pointer'></span>
                <span className='w-3 h-3 mx-2 bg-yellow-500 rounded-full'></span>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
              </AlertDialogCancel>
              <AlertDialogCancel className='border-0 m-0 p-0'>
                <Cross className='rotate-45' />
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogTitle className='text-2xl font-bold'>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className='text-sm lg:text-lg'>
            {summary}
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProjectCard;
