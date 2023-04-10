import Image from 'next/image';
import Link from 'next/link';
import puppy from '../../../../public/images/404.webp';
import styles from './ErrorSection.module.css';

export const ErrorSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>404</h1>
          <p className={styles.error_message}>Oops! I may have chewed up the power cord.</p>
          <Link href="/" className={styles.link}>
            Back to the main page
          </Link>
        </div>
        <Image src={puppy} alt="Little white dog" className={styles.image} />
      </div>
    </section>
  );
};
