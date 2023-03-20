import { ContactForm } from '../ContactForm/ContactForm';
import { ContactLocation } from '../ContactLocation/ContactLocation';
import styles from './ContactsContainer.module.css';

export const ContactsContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ContactForm />
        <ContactLocation />
      </div>
    </section>
  );
};
