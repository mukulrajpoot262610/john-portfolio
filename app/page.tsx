import Footer from '@/components/base/Footer';
import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Header from '@/components/sections/Header';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <main>
      <Header />
      <div id='about'>
        <About />
      </div>
      <div id='experience'>
        <Experience />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='achievements'>
        <Achievements />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
