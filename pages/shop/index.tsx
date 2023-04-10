import { SmallHero } from '@/components/SmallHero/SmallHero';
import { UnderConstruction } from '@/components/UnderConstruction/UnderConstruction';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Team() {
  return (
    <>
      <SmallHero title="Shop" />
      <UnderConstruction />
      <ScrollToTop />
    </>
  );
}
