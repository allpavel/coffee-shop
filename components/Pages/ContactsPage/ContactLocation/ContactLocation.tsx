import { MdLocationOn, MdLocalPhone, MdMail } from 'react-icons/md';
import styles from './ContactLocation.module.css';

export const ContactLocation = () => {
  return (
    <section>
      <h2 className={styles.container_title}>Locations</h2>
      <p className={styles.description}>
        Brought set all above. Our i saying dry gathering fourth unto behold sixth, replenish blessed sixth yielding
        great waters dominion was. From. Heaven us, light face made hath fill deep abundantly give itself good is them
        lesser. And our upon, fish creepeth and behold dry void firmament herb. Can't which.
      </p>
      <div className={styles.container}>
        <div>
          <div className={styles.card}>
            <MdLocationOn className={styles.icon} />
            <div>
              <h3 className={styles.title}>Adress</h3>
              <p>198 West 21th Street,</p>
              <p>Suite 721 New York,</p>
              <p>NY 10010</p>
            </div>
          </div>
          <div className={styles.card}>
            <MdLocalPhone className={styles.icon} />
            <div>
              <h3 className={styles.title}>Phones</h3>
              <p>Phone: +95 (0) 123 456 789</p>
              <p>Cell: +95 (0) 123 456 789</p>
            </div>
          </div>
          <div className={styles.card}>
            <MdMail className={styles.icon} />
            <div>
              <h3 className={styles.title}>Emails</h3>
              <p>barista@baristamail.com</p>
              <p>adv@baristamail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <MdLocationOn className={styles.icon} />
            <div>
              <h3 className={styles.title}>Adress</h3>
              <p>235 East 7th Street,</p>
              <p>Suite 44 New York,</p>
              <p>NY 30413</p>
            </div>
          </div>
          <div className={styles.card}>
            <MdLocalPhone className={styles.icon} />
            <div>
              <h3 className={styles.title}>Phones</h3>
              <p>Phone: +95 (0) 123 456 789</p>
              <p>Cell: +95 (0) 123 456 789</p>
            </div>
          </div>
          <div className={styles.card}>
            <MdMail className={styles.icon} />
            <div>
              <h3 className={styles.title}>Emails</h3>
              <p>barista@baristamail.com</p>
              <p>adv@baristamail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
