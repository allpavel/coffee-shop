import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import image from '../../public/images/news-1.jpg';
import styles from './CallToAction.module.css';

export const CallToAction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.header}>Try the best coffee in the city</h2>
          <p className={styles.description}>
            Greater rule bring don't winged. Creeping fowl from. One creepeth light. Forth after day face appear she'd
            gathering of own they're it kind day likeness forth given you.
          </p>
          <Link href="#" className={styles.button}>
            Read More <FaLongArrowAltRight className={styles.icon} />
          </Link>
        </div>
        <div>
          <Image src={image} alt="two cups of coffee on the table" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
