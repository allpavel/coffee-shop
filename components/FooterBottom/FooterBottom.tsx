import styles from './FooterBottom.module.css';
import { FaInstagram, FaTwitter, FaFacebookF, FaTumblr, FaVimeoV, FaLinkedinIn } from 'react-icons/fa';

export const FooterBottom = () => {
  return (
    <section className={styles.credentials}>
      <div>© Pavel Alloyarov</div>
      <div className={styles.socials}>
        <FaInstagram className={styles.socials__icon} />
        <FaTwitter className={styles.socials__icon} />
        <FaFacebookF className={styles.socials__icon} />
        <FaTumblr className={styles.socials__icon} />
        <FaVimeoV className={styles.socials__icon} />
        <FaLinkedinIn className={styles.socials__icon} />
      </div>
      <div>2023 All Rights Reserved</div>
    </section>
  );
};
