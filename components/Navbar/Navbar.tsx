import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { throttle } from '@/utills/throttle';
import logo from '../../public/images/logo-2.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [position, setPosition] = useState(0);

  const handleNavBarChange = () => {
    setPosition(window.scrollY);
  };

  const throttledhHandleNavBarChange = throttle(handleNavBarChange, 200);

  useEffect(() => {
    window.addEventListener('scroll', throttledhHandleNavBarChange, { passive: true });

    return () => removeEventListener('scroll', throttledhHandleNavBarChange);
  }, []);

  return (
    <header className={`${styles.container} ${position > 400 ? styles.shadow : ''}`}>
      <Link href="#">
        <Image src={logo} alt={'Logo of the coffee shop'} />
      </Link>
      <ol className={styles.navigation}>
        <li className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            home
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            about
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            reservation
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            blog
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            shop
          </Link>
        </li>
        <li className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            team
          </Link>
        </li>
      </ol>
    </header>
  );
};
