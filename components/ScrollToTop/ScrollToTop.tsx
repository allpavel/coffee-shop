import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import styles from './ScrollToTop.module.css';

export const ScrollToTop = () => {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container} onClick={handleClickToTop}>
      <BsFillArrowUpSquareFill />
    </div>
  );
};
