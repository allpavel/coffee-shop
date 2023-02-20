import styles from './BookingSection.module.css';

export const BookingSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.slogan}>Start Your Day Right.</p>
        <h2 className={styles.header}>Coffee build your base.</h2>
        <form>
          <select id="select-guests" name="select-guests" className={styles.guests}>
            <option value="">--Please choose a number of guests--</option>
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
            <option value="5">5 persons</option>
            <option value="6">6 persons</option>
            <option value="7">7 persons</option>
          </select>
          <input type="datetime-local" className={styles.time} />
          <input type="submit" value="Book a Table" className={styles.submitButton} />
        </form>
      </div>
    </section>
  );
};
