import { ContactsContainer } from '@/components/Pages/ContactsPage/ContactsContainer/ContactsContainer';
import { SmallHero } from '@/components/SmallHero/SmallHero';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function Contact() {
  return (
    <>
      <SmallHero title="Contacts" />
      <ContactsContainer />
      <ScrollToTop />
    </>
  );
}
