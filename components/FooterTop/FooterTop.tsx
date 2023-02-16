import styles from './FooterTop.module.css';

export const FooterTop = () => {
  return (
    <section className={styles.container}>
      <section className={styles.hours}>
        <h2>Opening Hours</h2>
        <div className={styles.hours__day}>
          <span>monday</span>
          <hr className={styles.hours__line} />
          <span>closed</span>
        </div>
        <div className={styles.hours__day}>
          <span>tuesday</span>
          <hr className={styles.hours__line} />
          <span>9:00 - 22:00</span>
        </div>
        <div className={styles.hours__day}>
          <span>wednesday</span>
          <hr className={styles.hours__line} />
          <span>9:00 - 22:00</span>
        </div>
        <div className={styles.hours__day}>
          <span>thursday</span>
          <hr className={styles.hours__line} />
          <span>9:00 - 22:00</span>
        </div>
        <div className={styles.hours__day}>
          <span>friday</span>
          <hr className={styles.hours__line} />
          <span>9:00 - 01:00</span>
        </div>
        <div className={styles.hours__day}>
          <span>saturday</span>
          <hr className={styles.hours__line} />
          <span>12:00 - 01:00</span>
        </div>
        <div className={styles.hours__day}>
          <span>sunday</span>
          <hr className={styles.hours__line} />
          <span>9:00 - 22:00</span>
        </div>
      </section>
      <section className={styles.posts}>
        <h2>Latest Posts</h2>
        <ul className={styles.posts__list}>
          <li className={styles['posts__list-item']}>
            expand your mind, change everything <span className={styles['posts__list-date']}>14.02.2022</span>
          </li>
          <li className={styles['posts__list-item']}>
            places to get lost <span className={styles['posts__list-date']}>20.03.2022</span>
          </li>
          <li className={styles['posts__list-item']}>
            lewis howes <span className={styles['posts__list-date']}>06.07.2022</span>
          </li>
          <li className={styles['posts__list-item']}>
            elevate your expectations <span className={styles['posts__list-date']}>19.11.2022</span>
          </li>
        </ul>
      </section>
      <section className={styles.contacts}>
        <h2>Contact Us</h2>
        <address className={styles.address}>
          <a href="mailto:barista@mail.com" className={styles.address__email}>
            barista@mail.com
          </a>
          <p>1-234-432-5555</p>
          <p>Raymond Boulevard 224, New York</p>
        </address>
        <div className={styles.subscribe}>
          <p>Subscribe:</p>
          <form className={styles.form}>
            <input placeholder="Your email" />
            <button className={styles.form__button}>Subscribe</button>
          </form>
        </div>
      </section>
      <section className={styles.locations}>
        <h2>Other Locations</h2>
        <div className={styles.locations__shop}>
          <h3>barista coffee shop</h3>
          <p className={styles.locations__address}>2606 Saints Alley</p>
          <p className={styles.locations__address}>Tampa, FL 33602</p>
        </div>
        <div className={styles.locations__shop}>
          <h3>barista cafe</h3>
          <p className={styles.locations__address}>3497 Watson Street</p>
          <p className={styles.locations__address}>Camden, NJ 08102</p>
        </div>
      </section>
    </section>
  );
};
