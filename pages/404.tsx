import { ErrorSection } from '@/components/Pages/Error404Page/ErrorSection/ErrorSection';
import { SmallHero } from '@/components/SmallHero/SmallHero';

export default function ErrorPage() {
  return (
    <>
      <SmallHero title="404" />
      <ErrorSection />
    </>
  );
}
