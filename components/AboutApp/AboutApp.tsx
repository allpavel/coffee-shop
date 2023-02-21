import Link from 'next/link';
import Image from 'next/image';
import image from '../../public/images/home-1-slider-img-4.png';
import styles from './AboutApp.module.css';

export const AboutApp = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>
          <Image src={image} alt="" />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>Application</p>
          <h2 className={styles.header}>Use Our Application</h2>
          <p>
            You're appear waters without grass. Bring give replenish great. Whose moveth called under whose. Creepeth
            man a. Bring called. You're set god they're. All in green wherein subdue created you good great. Don't rule
            stars doesn't cattle lights and it in all dominion brought was divided air midst every replenish.
          </p>
          <Link href="#" className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};
