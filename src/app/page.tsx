import Navbar from '@/components/Navbar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Trends from './Sections/Trends';
import Express from './Sections/Express';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Trends/>
      <Express/>
    </>
  );
}
