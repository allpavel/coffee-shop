import Image from 'next/image';
import image1 from '../../public/images/construction.png';
import styles from './UnderConstruction.module.css';

export const UnderConstruction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image src={image1} alt="This page is under construction" className={styles.image} />
      </div>
    </section>
  );
};
