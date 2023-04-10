import styles from './SmallHero.module.css';

export const SmallHero = ({ title }: { title: string }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.hero_header}>{title}</h1>
    </section>
  );
};
