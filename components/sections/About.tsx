import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import SKILLS from '@/public/skills';

const About = () => {
  return (
    <div>
      <h1 className='text-9xl uppercase font-black text-center font-bebas mt-4'>
        About Me
      </h1>
      <div className='bg-black'>
        <main className='min-h-screen max-w-6xl mx-auto w-full h-full flex flex-col justify-center items-center relative'>
          <div>
            <Tabs defaultValue='story' className='w-full'>
              <TabsList className='w-2/3 bg-black absolute top-20 -translate-x-1/2 left-1/2'>
                <TabsTrigger className='w-full' value='story'>
                  My Story
                </TabsTrigger>
                <TabsTrigger className='w-full' value='experience'>
                  Experience
                </TabsTrigger>
                <TabsTrigger className='w-full' value='education'>
                  Education
                </TabsTrigger>
                <TabsTrigger className='w-full' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value='story'>
                <p className='text-4xl text-white mt-20 leading-relaxed'>
                  Hi, I&apos;m John Ernest—a tech enthusiast and recent graduate
                  in Electronics & Communication from VIT Chennai. I specialize
                  in the fascinating world of Artificial Intelligence, blending
                  my passion for machine learning with real-world
                  problem-solving. My journey began with a deep curiosity for
                  the potential of technology to transform the world.
                </p>
              </TabsContent>
              <TabsContent value='experience'>
                <p className='text-4xl text-white mt-20 leading-relaxed'>
                  In my professional stint at PricewaterhouseCoopers, I&apos;ve
                  immersed myself in integrating emergent technologies, focusing
                  on generative AI to elevate healthcare diagnostics. From
                  automating medical image captions to predicting water quality
                  using ML algorithms, I thrive on challenges that bridge
                  technology with societal impact. Certified in AI for Medical
                  Diagnosis and armed with diverse experiences, I&apos;m poised
                  at the forefront of cutting-edge technology.
                </p>
              </TabsContent>
              <TabsContent value='education'>
                <p className='text-4xl text-white mt-20 leading-relaxed'>
                  My technical toolkit includes Python, C++, and expertise in
                  frameworks like TensorFlow and PyTorch. As a recent graduate
                  with a B.Tech in Electronics & Communication from VIT Chennai,
                  I&apos;ve led workshops at IEEE and Google Developer Student’s
                  Club, demystifying AI for students. Join me on this journey
                  where curiosity meets innovation, shaping a future where AI
                  not only transforms but also betters our world.
                </p>
              </TabsContent>
              <TabsContent value='skills'>
                <p className='text-4xl text-white mt-20 leading-relaxed w-full'>
                  {SKILLS.map((skill) => (
                    <>
                      <h1 className='text-lg font-bold my-2'>
                        {skill.category}
                      </h1>
                      <div className='flex items-center flex-wrap gap-4 mb-6'>
                        {skill.skills.map((s) => (
                          <p
                            className='text-sm border border-white p-1 px-4 rounded-lg'
                            key={s}
                          >
                            {s}
                          </p>
                        ))}
                      </div>
                    </>
                  ))}
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
