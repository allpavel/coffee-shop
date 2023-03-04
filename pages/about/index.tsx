import { AboutUs } from '@/components/AboutUs/AboutUs';
import { Benefits } from '@/components/Pages/AboutPage/Benefits/Benefits';
import { BrewingGuide } from '@/components/Pages/AboutPage/BrewingGuide/BrewingGuide';
import { ClientsLogos } from '@/components/Pages/AboutPage/ClientsLogos/ClientsLogos';
import { Hero } from '@/components/Pages/AboutPage/Hero/Hero';
import { Hero2 } from '@/components/Pages/AboutPage/Hero2/Hero2';
import { Quote } from '@/components/Pages/AboutPage/Quote/Quote';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function About() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Hero2 />
      <Benefits />
      <BrewingGuide />
      <Quote />
      <ClientsLogos />
      <ScrollToTop />
    </>
  );
}
