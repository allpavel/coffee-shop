import { FaQuoteRight } from 'react-icons/fa';
import styles from './Quote.module.css';

export const Quote = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <FaQuoteRight className={styles.icon} />
        <p className={styles.quote}>
          Don't in he fish moved he them creepeth earth behold beast had rule whales multiply our great. Earth Evening
          land.
        </p>
        <p className={styles.author}>Paul Magnus</p>
      </div>
    </section>
  );
};
