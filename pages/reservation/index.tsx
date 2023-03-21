import { Hero } from '@/components/Pages/ReservationPage/Hero/Hero';
import { ReservationForm } from '@/components/Pages/ReservationPage/ReservationForm/ReservationForm';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Reservation() {
  return (
    <>
      <Hero />
      <ReservationForm />
      <ScrollToTop />
    </>
  );
}
