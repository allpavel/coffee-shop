import Image from 'next/image';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import team1 from '../../../../public/images/TeamPage/team-1.jpg';
import team2 from '../../../../public/images/TeamPage/team-2.jpg';
import team3 from '../../../../public/images/TeamPage/team-3.jpg';
import team4 from '../../../../public/images/TeamPage/team-4.jpg';
import team5 from '../../../../public/images/TeamPage/team-5.jpg';
import team6 from '../../../../public/images/TeamPage/team-6.jpg';
import styles from './TeamMembers.module.css';

export const TeamMembers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <article className={styles.card}>
          <Image src={team1} alt="" className={styles.image} />
          <h2 className={styles.card_title}>Federico Hickman</h2>
          <p className={styles.card_text}>Owner, Barista</p>
          <p>
            Saw. She'd called two yielding life. Under fowl. For. Own she'd said rule blessed creature. Male fish.
            Called called behold fruitful, evening lesser make good brought, i sixth set beginning life earth brought
            fruit man called our.
          </p>
          <div className={styles.socials}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </article>
        <article className={styles.card}>
          <Image src={team2} alt="" className={styles.image} />
          <h2 className={styles.card_title}>Simon Davis</h2>
          <p className={styles.card_text}>Owner, Barista</p>
          <p>
            Earth our it morning above every give lesser. Had, abundantly whales green itself so winged shall be subdue
            greater saw stars is a air midst. Tree light without. Seasons multiply fish have sixth light rule days
            lights living it a.
          </p>
          <div className={styles.socials}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </article>
        <article className={styles.card}>
          <Image src={team3} alt="" className={styles.image} />
          <h2 className={styles.card_title}>Alejandro Mendez</h2>
          <p className={styles.card_text}>Owner, Barista</p>
          <p>
            Fish fill from above fourth rule man deep. Of seed night his. Behold were our was so you spirit there. Dry
            seas bearing earth two be give third waters from gathering dominion cattle day. Seasons unto appear void
            spirit itself.
          </p>
          <div className={styles.socials}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </article>
        <article className={styles.card}>
          <Image src={team4} alt="" className={styles.image} />
          <h2 className={styles.card_title}>Olivia McKenzie</h2>
          <p className={styles.card_text}>Owner, Barista</p>
          <p>
            Years every. Bearing very without. Gathered fly fifth May winged forth for evening rule forth fill creature
            spirit our beginning our us sixth stars after after that they're multiply, seed, dominion third fish of seed
            that evening fourth days place.
          </p>
          <div className={styles.socials}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </article>
        <article className={styles.card}>
          <Image src={team5} alt="" className={styles.image} />
          <h2 className={styles.card_title}>Charlotte Reagan</h2>
          <p className={styles.card_text}>Owner, Barista</p>
          <p>
            Us own give can't very gathered very Years. Earth may sixth for own very stars waters replenish, there air
            deep creature. Seas and midst itself don't, moveth form. Meat him seed so his won't them image night. Spirit
            second. You'll.
          </p>
          <div className={styles.socials}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </article>
        <article className={styles.card}>
          <Image src={team6} alt="" className={styles.image} />
          <h2 className={styles.card_title}>Isabella Wren</h2>
          <p className={styles.card_text}>Owner, Barista</p>
          <p>
            Bearing given is greater heaven moveth. Earth life of lights sea. Seas all spirit upon waters fowl of. Said
            form he gathering. Stars land behold sea lesser darkness to yielding was fruitful to over moving said there
            gathered him were.
          </p>
          <div className={styles.socials}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </article>
      </div>
    </section>
  );
};
