import { Hero } from '@/components/Hero/Hero';
import { BookingSection } from '@/components/BookingSection/BookingSection';
import { AboutUs } from '@/components/AboutUs/AboutUs';
import { AboutApp } from '@/components/AboutApp/AboutApp';
import { BrewingMethods } from '@/components/BrewingMethods/BrewingMethods';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { Menu } from '@/components/Menu/Menu';
import { Shop } from '@/components/Shop/Shop';
import { Gallery } from '@/components/Gallery/Gallery';
import { News } from '@/components/News/News';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

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
      <Shop />
      <Gallery />
      <News />
      <ScrollToTop />
    </>
  );
}
