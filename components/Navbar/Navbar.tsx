import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { throttle } from '@/utills/throttle';
import logo from '../../public/images/logo-2.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header
      className={`${styles.container} ${position > 400 ? styles.shadow : ''} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.mobileHeader}>
        <Link href="/">
          <Image src={logo} alt={'Logo of the coffee shop'} className={styles.image} />
        </Link>
        {isOpen ? (
          <MdClose className={styles.menuIcon} onClick={handleOpenMenu} />
        ) : (
          <GiHamburgerMenu className={styles.menuIcon} onClick={handleOpenMenu} />
        )}
      </div>
      <nav className={`${styles.navigation} ${isOpen ? '' : styles.navClosed} `}>
        <Link href="/" className={`${styles.navigation__link} ${router.pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`${styles.navigation__link} ${router.pathname === '/about' ? styles.active : ''}`}
        >
          About
        </Link>
        <Link
          href="/reservation"
          className={`${styles.navigation__link} ${router.pathname === '/reservation' ? styles.active : ''}`}
        >
          Reservation
        </Link>
        <Link href="/blog" className={`${styles.navigation__link} ${router.pathname === '/blog' ? styles.active : ''}`}>
          Blog
        </Link>
        <Link href="#" className={`${styles.navigation__link} ${router.pathname === '/shop' ? styles.active : ''}`}>
          Shop
        </Link>
        <Link href="/team" className={`${styles.navigation__link} ${router.pathname === '/team' ? styles.active : ''}`}>
          Team
        </Link>
      </nav>
    </header>
  );
};
