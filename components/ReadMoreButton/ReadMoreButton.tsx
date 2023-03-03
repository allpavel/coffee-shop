import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './ReadMoreButton.module.css';

export const ReadMoreButton = () => {
  return (
    <Link href="#" className={styles.button}>
      Read More <FaLongArrowAltRight className={styles.icon} />
    </Link>
  );
};
