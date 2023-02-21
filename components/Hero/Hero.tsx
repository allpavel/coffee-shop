import Image from 'next/image';
import logo from '../../public/images/home-1-img-6.png';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_text}>
        <Image src={logo} alt="" />
        <h1 className={styles.hero_header}>Brewed to perfection</h1>
        <div className={styles.hero_desc}>
          <p>So go out and make that coffee and enjoy!</p>
          <p>If you need inspiration for new coffee ideas</p>
        </div>
        <button className={styles.hero_button}>Read more</button>
      </div>
    </div>
  );
};
