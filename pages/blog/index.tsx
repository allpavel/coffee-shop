import { BlogSection } from '@/components/Pages/BlogPage/BlogSection/BlogSection';
import { Hero } from '@/components/Pages/BlogPage/Hero/Hero';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function BlogPage() {
  return (
    <>
      <Hero />
      <BlogSection />
      <ScrollToTop />
    </>
  );
}
