import { useState, useEffect } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { throttle } from '@/utills/throttle';
import styles from './ScrollToTop.module.css';

export const ScrollToTop = () => {
  const [position, setPosition] = useState(0);
  console.log('render');
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  const throttledhHandleScroll = throttle(handleScroll, 500);

  useEffect(() => {
    window.addEventListener('scroll', throttledhHandleScroll, { passive: true });

    return () => removeEventListener('scroll', throttledhHandleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${position > 500 ? styles.shown : styles.hidden}`} onClick={handleClickToTop}>
      <BsFillArrowUpSquareFill />
    </div>
  );
};
