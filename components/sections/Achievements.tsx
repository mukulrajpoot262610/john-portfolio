import ACHIEVEMENTS from '@/public/achievements';
import React from 'react';
import AchievementCard from '../Card/AchievementCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const Achievements = () => {
  return (
    <div>
      <h1 className='text-7xl lg:text-9xl uppercase font-black text-center font-bebas'>
        Achievements
      </h1>
      <main className='w-full mt-24 relative'>
        <Tabs defaultValue='2022' className='w-full pt-20'>
          <TabsList className='w-full lg:w-2/3 bg-black border border-black absolute top-0 -translate-x-1/2 left-1/2'>
            <TabsTrigger className='w-full' value='2022'>
              2022
            </TabsTrigger>
            <TabsTrigger className='w-full' value='2021'>
              2021
            </TabsTrigger>
            <TabsTrigger className='w-full' value='2020'>
              2020
            </TabsTrigger>
          </TabsList>
          <TabsContent value='2022'>
            {ACHIEVEMENTS.filter((f) => f.year === 2022).map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement.achievement}
                year={achievement.year}
                organization={achievement.organization}
                id={achievement.id}
              />
            ))}
          </TabsContent>
          <TabsContent value='2021'>
            {ACHIEVEMENTS.filter((f) => f.year === 2021).map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement.achievement}
                year={achievement.year}
                organization={achievement.organization}
                id={achievement.id}
              />
            ))}
          </TabsContent>
          <TabsContent value='2020'>
            {ACHIEVEMENTS.filter((f) => f.year === 2020).map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement.achievement}
                year={achievement.year}
                organization={achievement.organization}
                id={achievement.id}
              />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Achievements;
