import Image from 'next/image';
import client1 from '../../../../public/images/AboutPage/Client-1.png';
import client2 from '../../../../public/images/AboutPage/Client-2.png';
import client3 from '../../../../public/images/AboutPage/Client-3.png';
import client4 from '../../../../public/images/AboutPage/Client-4.png';
import styles from './ClientsLogos.module.css';

export const ClientsLogos = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image src={client1} alt="" className={styles.client} />
        <Image src={client2} alt="" className={styles.client} />
        <Image src={client3} alt="" className={styles.client} />
        <Image src={client4} alt="" className={styles.client} />
      </div>
    </section>
  );
};
