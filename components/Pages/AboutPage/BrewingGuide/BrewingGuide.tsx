import Link from 'next/link';
import Image from 'next/image';
import offer1 from '../../../../public/images/AboutPage/offer-2.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './BrewingGuide.module.css';

export const BrewingGuide = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.grid1} ${styles.content}`}>
        <h2 className={styles.header}>Brewing Guide</h2>
        <p>
          Created stars our fruit spirit firmament dominion meat. Bring bearing open multiply beast be multiply void,
          every. They're and us days kind likeness seed man darkness midst isn't forth land had all upon to years a
          behold darkness You're she'd.
        </p>
        <Link href="#" className={`${styles.button} ${styles.white}`}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
      <div className={`${styles.grid2} ${styles.content}`}>
        <h2 className={styles.header}>Brewing Guide</h2>
        <p>
          Kind green is evening two said him. Also, above fish after it and unto lights made after fruit winged moving.
          Creature. To female every fill gathering have bring green female man the you're. Blessed he hath called
          fourth. Winged lights.
        </p>
        <Link href="#" className={`${styles.button} ${styles.black}`}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
      <Image src={offer1} alt="" className={styles.image} />
      <div className={`${styles.grid2} ${styles.content}`}>
        <h2 className={styles.header}>Brewing Guide</h2>
        <p>
          Created stars our fruit spirit firmament dominion meat. Bring bearing open multiply beast be multiply void,
          every. They're and us days kind likeness seed man darkness midst isn't forth land had all upon to years a
          behold darkness You're she'd.
        </p>
        <Link href="#" className={`${styles.button} ${styles.black}`}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
      <Image src={offer1} alt="" className={styles.image} />
      <div className={`${styles.grid1} ${styles.content}`}>
        <h2 className={styles.header}>Brewing Guide</h2>
        <p>
          Kind green is evening two said him. Also, above fish after it and unto lights made after fruit winged moving.
          Creature. To female every fill gathering have bring green female man the you're. Blessed he hath called
          fourth. Winged lights.
        </p>
        <Link href="#" className={`${styles.button} ${styles.white}`}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
    </section>
  );
};
