import { Hero } from '@/components/Hero/Hero';
import { BookingSection } from '@/components/BookingSection/BookingSection';
import { AboutUs } from '@/components/AboutUs/AboutUs';
import { AboutApp } from '@/components/AboutApp/AboutApp';
import { BrewingMethods } from '@/components/BrewingMethods/BrewingMethods';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { Menu } from '@/components/Menu/Menu';

export default function Home() {
  return (
    <>
      <Hero />
      <BookingSection />
      <AboutUs />
      <AboutApp />
      <BrewingMethods />
      <CallToAction />
      <Menu />
    </>
  );
}
