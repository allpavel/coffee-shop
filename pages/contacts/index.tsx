import { ContactsContainer } from '@/components/Pages/ContactsPage/ContactsContainer/ContactsContainer';
import { Hero } from '@/components/Pages/ContactsPage/Hero/Hero';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Contact() {
  return (
    <>
      <Hero />
      <ContactsContainer />
      <ScrollToTop />
    </>
  );
}
