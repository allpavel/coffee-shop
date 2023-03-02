import { AboutUs } from '@/components/AboutUs/AboutUs';
import { Benefits } from '@/components/Pages/AboutPage/Benefits/Benefits';
import { Hero } from '@/components/Pages/AboutPage/Hero/Hero';
import { Hero2 } from '@/components/Pages/AboutPage/Hero2/Hero2';

export default function About() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Hero2 />
      <Benefits />
    </>
  );
}
