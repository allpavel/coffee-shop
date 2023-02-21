import Image from 'next/image';
import icon1 from '../../public/images/home-1-icon-img-1.png';
import icon2 from '../../public/images/home-1-icon-img-2.png';
import icon3 from '../../public/images/home-1-icon-img-3.png';
import icon4 from '../../public/images/home-1-icon-img-4.png';
import styles from './BrewingMethods.module.css';

export const BrewingMethods = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <article>
          <div>
            <Image src={icon1} alt="coffeemaker" className={styles.image} />
          </div>
          <div className={styles.description}>
            <h3 className={styles.header}>coffeemaker</h3>
            <p>
              Light darkness gathering evening, was creature. Beast that is seas. Yielding void seas i seed a be set
              give our.
            </p>
          </div>
        </article>
        <article>
          <div>
            <Image src={icon2} alt="coffee grinder" className={styles.image} />
          </div>
          <div className={styles.description}>
            <h3 className={styles.header}>Coffee grinder</h3>
            <p>
              After kind over. Rule moved blessed from heaven the, is creeping them divide air creeping sixth beast
              saying was winged.
            </p>
          </div>
        </article>
        <article>
          <div>
            <Image src={icon3} alt="drip coffee" className={styles.image} />
          </div>
          <div className={styles.description}>
            <h3 className={styles.header}>Drip coffee</h3>
            <p>
              One which they're after fruit lights. Creature. Darkness may us to midst one great living appear life fill
              sixth appear.
            </p>
          </div>
        </article>
        <article>
          <div>
            <Image src={icon4} alt="espresso machine" className={styles.image} />
          </div>
          <div className={styles.description}>
            <h3 className={styles.header}>espresso machine</h3>
            <p>
              Our heaven. Said moving were very yielding spirit. Stars sea waters you divide you Fowl seasons god moveth
              all whales.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
