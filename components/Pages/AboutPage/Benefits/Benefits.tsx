import { FaWifi, FaBookReader, FaRegStar, FaMapMarkedAlt } from 'react-icons/fa';
import { SlPresent } from 'react-icons/sl';
import { GiMicrophone } from 'react-icons/gi';
import { MdOutlineShoppingBag, MdOutlineWbSunny, MdOutlineMusicVideo } from 'react-icons/md';
import styles from './Benefits.module.css';

export const Benefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <article className={styles.card}>
          <div className={styles.icon}>
            <FaWifi />
          </div>
          <div>
            <h2 className={styles.card_title}>Free WiFi</h2>
            <p className={styles.card_text}>
              Day divided, given. Fowl creeping fish dry. Dominion our one very created. Above days life greater greater
              evening doesn't sea.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <SlPresent />
          </div>
          <div>
            <h2 className={styles.card_title}>Special Offer</h2>
            <p className={styles.card_text}>
              Which night beginning they're fowl him firmament, is moving seas itself blessed every fruit kind without.
              Unto i Appear creature.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <GiMicrophone />
          </div>
          <div>
            <h2 className={styles.card_title}>Events</h2>
            <p className={styles.card_text}>
              Created all rule kind fruitful day from, after you and own open. Moving years give have brought that
              brought. Fill fill evening green. Face years. Of midst saw creature good.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <FaRegStar />
          </div>
          <div>
            <h2 className={styles.card_title}>New Flavors</h2>
            <p className={styles.card_text}>
              From won't waters made face saying air fruitful greater. Rule isn't made land. Fish. Earth, had beast.
              Heaven be days. Had night whales creeping won't fruitful replenish. Sea. Creature stars.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <FaBookReader />
          </div>
          <div>
            <h2 className={styles.card_title}>Books and Newspapers</h2>
            <p className={styles.card_text}>
              Man dominion under two creepeth green dominion it midst female winged you'll cattle greater cattle morning
              fish saw male likeness Made gathering. A void evening divided evening face so don't.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <MdOutlineShoppingBag />
          </div>
          <div>
            <h2 className={styles.card_title}>Coffee Shop</h2>
            <p className={styles.card_text}>
              Created open night night, called you're. Night. Fifth his it. Him dominion green appear let. Called
              yielding. Wherein give man stars morning above. The moveth called seed creeping beginning saying.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <MdOutlineWbSunny />
          </div>
          <div>
            <h2 className={styles.card_title}>Good Vibes</h2>
            <p className={styles.card_text}>
              Fifth fruitful image sea third days firmament also tree was every fowl set saying creeping seed all every
              saw so fruit after brought herb two sea a to darkness to.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <FaMapMarkedAlt />
          </div>
          <div>
            <h2 className={styles.card_title}>New Locations</h2>
            <p className={styles.card_text}>
              Dominion own air earth beast together i morning creeping land years saying night unto said fourth creature
              after and it one appear waters moveth seasons creepeth without to. Heaven waters.
            </p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.icon}>
            <MdOutlineMusicVideo />
          </div>
          <div>
            <h2 className={styles.card_title}>Best Music</h2>
            <p className={styles.card_text}>
              Dominion own air earth beast together i morning creeping land years saying night unto said fourth creature
              after and it one appear waters moveth seasons creepeth without to. Heaven waters.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
