import Image from 'next/image';
import Link from 'next/link';
import { ReadMoreButton } from '../ReadMoreButton/ReadMoreButton';
import img1 from '../../public/images/h-1-img-1.jpg';
import img2 from '../../public/images/h-1-img-2.jpg';
import img3 from '../../public/images/h-1-img-3.jpg';
import styles from './AboutUs.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <article className={styles.card}>
          <Image src={img1} alt="Cookies and a cup of coffee on the table" className={styles.image} />
          <div>
            <h3 className={styles.header}>
              <span className={styles.header__number}>01</span>Beatiful place
            </h3>
            <p>
              Coffee beans on the day. With the exception of the coffee beans that are in the container, only the cups
              of coffee beans and cups of other natural fruits that the chef uses to cook the food have special
              properties to them because that is all they cook for them.
            </p>
            <Link href="#" className={styles.button}>
              Read More <FaLongArrowAltRight className={styles.icon} />
            </Link>
          </div>
        </article>
        <article className={styles.card}>
          <Image src={img2} alt="Cookies and a cup of coffee on the table" className={styles.image} />
          <div>
            <h3 className={styles.header}>
              <span className={styles.header__number}>02</span>Feel the Coffee
            </h3>
            <p>
              Blessed waters one of male third you'll earth moving. Face him open open living don't together it unto him
              creeping. Us don't cattle, bring. Waters she'd the isn't of without yielding beast lights gathered
              darkness night moved whales image i his. Give dry moveth moved moved, him doesn't. It beginning.
            </p>
            <Link href="#" className={styles.button}>
              Read More <FaLongArrowAltRight className={styles.icon} />
            </Link>
          </div>
        </article>
        <article className={styles.card}>
          <Image src={img3} alt="Cookies and a cup of coffee on the table" className={styles.image} />
          <div>
            <h3 className={styles.header}>
              <span className={styles.header__number}>03</span>Full Taste
            </h3>
            <p>
              Good thing without. Third living can't to them day fish firmament fifth their. Waters the set him you're
              them firmament. Isn't third seasons face you to, all A their. Open said our doesn't every of god you're so
              face meat first replenish day life set very, yielding under that isn't.
            </p>
            <Link href="#" className={styles.button}>
              Read More <FaLongArrowAltRight className={styles.icon} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};
