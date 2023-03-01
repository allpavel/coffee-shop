import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import image1 from '../../public/images/news-1.jpg';
import image2 from '../../public/images/news-2.jpg';
import image3 from '../../public/images/news-3.jpg';
import styles from './News.module.css';

export const News = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>read our latest news</h2>
      <div className={styles.content}>
        <article className={styles.card}>
          <Image src={image1} alt="coffee on the table" className={styles.imageSize} />
          <h3 className={styles.cardHeader}>make it simple</h3>
          <p className={styles.cardAuthor}>by Jane Wolf / Competition / 23.02.2022</p>
          <p>
            And earth life moved were don't lesser behold deep abundantly very dominion over one had fowl was all
            beginning. Lesser whales male green the them fish. And After open creepeth.
          </p>
          <Link href="#" className={styles.button}>
            Read More <FaLongArrowAltRight className={styles.icon} />
          </Link>
        </article>
        <article className={styles.card}>
          <Image src={image2} alt="barista" className={styles.imageSize} />
          <h3 className={styles.cardHeader}>make it simple</h3>
          <p className={styles.cardAuthor}>by Jane Wolf / Competition / 23.02.2022</p>
          <p>
            Dry make don't hath female created. Open also fourth. Great which. Light creeping bring. Fourth saw from of,
            subdue midst life don't very god you'll also them also blessed blessed.
          </p>
          <Link href="#" className={styles.button}>
            Read More <FaLongArrowAltRight className={styles.icon} />
          </Link>
        </article>
        <article className={styles.card}>
          <Image src={image3} alt="coffee table" className={styles.imageSize} />
          <h3 className={styles.cardHeader}>make it simple</h3>
          <p className={styles.cardAuthor}>by Jane Wolf / Competition / 23.02.2022</p>
          <p>
            Days rule isn't, replenish shall rule great set had face fifth whose. Moving moveth. They're. Morning he.
            Fruit rule i also so heaven and female third grass divided winged of.
          </p>
          <Link href="#" className={styles.button}>
            Read More <FaLongArrowAltRight className={styles.icon} />
          </Link>
        </article>
      </div>
    </section>
  );
};
