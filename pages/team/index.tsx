import { SmallHero } from '@/components/SmallHero/SmallHero';
import { TeamMembers } from '@/components/Pages/TeamPage/TeamMembers/TeamMembers';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Team() {
  return (
    <>
      <SmallHero title="Our Team" />
      <TeamMembers />
      <ScrollToTop />
    </>
  );
}
