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

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '../animation/glowingStars';

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
    <div className='border overflow-hidden h-72 w-96 rounded-lg group'>
      <AlertDialog>
        <AlertDialogTrigger className='w-full text-left'>
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle className='text-xl mt-2'>
              {title}
            </GlowingStarsTitle>
            <div className='flex justify-between items-end'>
              <GlowingStarsDescription className='text-sm line-clamp-4 mt-2'>
                {summary}
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className='flex justify-end items-center'>
              <AlertDialogCancel className='border-0 m-0 p-0'>
                <Cross className='rotate-45' />
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogTitle className='text-2xl font-bold'>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className='text-sm lg:text-base'>
            {summary}
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProjectCard;
