import { useRouter } from 'next/router';
import styles from './GoBackButton.module.css';

export const GoBackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={styles.button}>
      Go Back
    </button>
  );
};
