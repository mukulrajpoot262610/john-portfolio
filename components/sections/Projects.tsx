import PROJECTS from '@/public/projects';
import React from 'react';
import ProjectCard from '../Card/ProjectCard';

const Projects = () => {
  return (
    <div className='mb-20'>
      <h1 className='text-9xl uppercase font-black text-center font-bebas'>
        Projects
      </h1>
      <main className='max-w-7xl mx-auto w-full flex flex-wrap justify-center items-center gap-4 place-items-center mt-24'>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            summary={project.summary}
            duration={project.duration}
            technologies_used={project.technologies_used}
            team_size={project.team_size}
            image={project.image}
          />
        ))}
      </main>
    </div>
  );
};

export default Projects;
