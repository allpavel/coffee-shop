import Image from 'next/image';
import paperPauch from '../../public/images/product-image-1.jpg';
import paperBag from '../../public/images/product-image-2.jpg';
import plasticPauch from '../../public/images/product-image-3.jpg';
import pot from '../../public/images/product-image-4.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Shop.module.css';

export const Shop = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>coffee build your base</h2>
      <div className={styles.content}>
        <article className={styles.card}>
          <div className={styles.image_container}>
            <Image src={paperPauch} alt="paper pauch of coffee" className={styles.image} />
            <button className={styles.button}>
              <FaShoppingCart className={styles.icon} />
              Add to cart
            </button>
          </div>
          <div>rating</div>
          <div>$46.60</div>
        </article>
        <article className={styles.card}>
          <div className={styles.image_container}>
            <Image src={paperBag} alt="paper bag of coffee" className={styles.image} />
            <button className={styles.button}>
              <FaShoppingCart className={styles.icon} />
              Add to cart
            </button>
          </div>
          <div>rating</div>
          <div>$79.00</div>
        </article>
        <article className={styles.card}>
          <div className={styles.image_container}>
            <Image src={plasticPauch} alt="plastic pauch of coffee" className={styles.image} />
            <button className={styles.button}>
              <FaShoppingCart className={styles.icon} />
              Add to cart
            </button>
          </div>
          <div>rating</div>
          <div>$27.00</div>
        </article>
        <article className={styles.card}>
          <div className={styles.image_container}>
            <Image src={pot} alt="pot for coffee" className={styles.image} />
            <button className={styles.button}>
              <FaShoppingCart className={styles.icon} />
              Add to cart
            </button>
          </div>
          <div>rating</div>
          <div>$71.00</div>
        </article>
      </div>
    </section>
  );
};
