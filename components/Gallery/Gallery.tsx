import Image from 'next/image';
import image1 from '../../public/images/gallery-1.jpg';
import image2 from '../../public/images/gallery-2.jpg';
import image3 from '../../public/images/gallery-3.jpg';
import image4 from '../../public/images/gallery-4.jpg';
import image5 from '../../public/images/gallery-5.jpg';
import image6 from '../../public/images/gallery-6.jpg';
import styles from './Gallery.module.css';

export const Gallery = () => {
  return (
    <section className={styles.container}>
      <Image src={image1} alt="espresso machine" className={`${styles.image1} ${styles.imageSize}`} />
      <Image src={image2} alt="croissant" className={`${styles.image2} ${styles.imageSize}`} />
      <Image src={image3} alt="croissant" className={`${styles.image3} ${styles.imageSize}`} />
      <Image src={image4} alt="croissant" className={`${styles.image4} ${styles.imageSize}`} />
      <Image src={image5} alt="croissant" className={`${styles.image5} ${styles.imageSize}`} />
      <Image src={image6} alt="croissant" className={`${styles.image6} ${styles.imageSize}`} />
    </section>
  );
};
