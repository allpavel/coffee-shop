import { Hero } from '@/components/Pages/TeamPage/Hero/Hero';
import { TeamMembers } from '@/components/Pages/TeamPage/TeamMembers/TeamMembers';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Team() {
  return (
    <>
      <Hero />
      <TeamMembers />
      <ScrollToTop />
    </>
  );
}
