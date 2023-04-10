import { SmallHero } from '@/components/SmallHero/SmallHero';
import { ReservationForm } from '@/components/Pages/ReservationPage/ReservationForm/ReservationForm';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Reservation() {
  return (
    <>
      <SmallHero title="Reservation" />
      <ReservationForm />
      <ScrollToTop />
    </>
  );
}
