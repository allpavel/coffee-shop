import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { throttle } from '@/utills/throttle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import logo from '../../public/images/logo-2.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavBarChange = () => {
    setPosition(window.scrollY);
  };

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const throttledhHandleNavBarChange = throttle(handleNavBarChange, 200);

  useEffect(() => {
    window.addEventListener('scroll', throttledhHandleNavBarChange, { passive: true });

    return () => removeEventListener('scroll', throttledhHandleNavBarChange);
  }, []);
  return (
    <header
      className={`${styles.container} ${position > 400 ? styles.shadow : ''} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.mobileHeader}>
        <Link href="#">
          <Image src={logo} alt={'Logo of the coffee shop'} />
        </Link>
        {isOpen ? (
          <MdClose className={styles.menuIcon} onClick={handleOpenMenu} />
        ) : (
          <GiHamburgerMenu className={styles.menuIcon} onClick={handleOpenMenu} />
        )}
      </div>
      <nav className={`${styles.navigation} ${isOpen ? '' : styles.navClosed} `}>
        <div className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            home
          </Link>
        </div>
        <div className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            about
          </Link>
        </div>
        <div className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            reservation
          </Link>
        </div>
        <div className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            blog
          </Link>
        </div>
        <div className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            shop
          </Link>
        </div>
        <div className={styles.navigation__item}>
          <Link href="#" className={styles.navigation__link}>
            team
          </Link>
        </div>
      </nav>
    </header>
  );
};
