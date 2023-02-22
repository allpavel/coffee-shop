import Image from 'next/image';
import Link from 'next/link';
import latte from '../../public/images/h-1-list-icon-img-150x150.jpg';
import icedLatte from '../../public/images/h-1-list-icon-img-8-150x150.jpg';
import mocha from '../../public/images/h-1-list-icon-img-2-150x150.jpg';
import macchiato from '../../public/images/h-1-list-icon-img-7-150x150.jpg';
import whiteMocha from '../../public/images/h-1-list-icon-img-3-150x150.jpg';
import caramelMacc from '../../public/images/h-1-list-icon-img-9-150x150.jpg';
import americano from '../../public/images/h-1-list-icon-img-4-150x150.jpg';
import smokedLatte from '../../public/images/h-1-list-icon-img-10-150x150.jpg';
import cappuccino from '../../public/images/h-1-list-icon-img-5-150x150.jpg';
import icedMocha from '../../public/images/h-1-list-icon-img-11-150x150.jpg';
import vanilla from '../../public/images/h-1-list-icon-img-6-150x150.jpg';
import gingerLatte from '../../public/images/h-1-list-icon-img-12-150x150.jpg';
import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Favourite coffee flavours</h2>
      <article className={styles.content}>
        <div className={styles.card}>
          <div>
            <Image src={latte} alt="cup of latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>caffee latte</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Fresh brewed coffee and steamed milk</p>
          </div>
          <div>
            <p className={styles.price}>$2.95</p>
            <p className={styles.new}>new</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={icedLatte} alt="cup of latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>Iced caramel latte</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, Milk, Ice and Caramel Sauce</p>
          </div>
          <div>
            <p className={styles.price}>$4.67</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={mocha} alt="cup of latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>Caffe mocha</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso With Milk, and Whipped Cream</p>
          </div>
          <div>
            <p className={styles.price}>$3.67</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={macchiato} alt="cup of latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>Espresso macchiato</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Rich Espresso With Milk and Foam</p>
          </div>
          <div>
            <p className={styles.price}>$2.98</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={whiteMocha} alt="cup of white chocolate mocha" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>white chocolate mocha</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, White Chocolate, Milk, Ice and Cream</p>
          </div>
          <div>
            <p className={styles.price}>$2.79</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={caramelMacc} alt="cup of caramel macchiato" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>caramel macchiato</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, vanilla-flavored syrup and milk</p>
          </div>
          <div>
            <p className={styles.price}>$2.54</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={americano} alt="cup of americano" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>Caffe americano</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>spresso Shots and Light Layer of Crema</p>
          </div>
          <div>
            <p className={styles.price}>$3.06</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={smokedLatte} alt="cup of iced smoked latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>iced smoked latte</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, ice, with smoked butterscotch</p>
          </div>
          <div>
            <p className={styles.price}>$3.05</p>
            <p className={styles.new}>new</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={cappuccino} alt="cup of cappucino" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>cappucino</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, and Smoothed Layer of Foam</p>
          </div>
          <div>
            <p className={styles.price}>$4.03</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={icedMocha} alt="cup of iced caffe mocha" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>iced caffe mocha</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, bittersweet mocha sauce, milk and ice</p>
          </div>
          <div>
            <p className={styles.price}>$2.60</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={vanilla} alt="cup of vanilla latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>vanilla latte</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso Milk With Flavor,and Cream</p>
          </div>
          <div>
            <p className={styles.price}>$3.65</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <Image src={gingerLatte} alt="cup of iced gingerbread latte" className={styles.image} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.title_container}>
              <p className={styles.title}>iced gingerbread latte</p>
              <div className={styles.line}></div>
            </div>
            <p className={styles.description}>Espresso, Milk, Ice, and Gingerbread Flavor</p>
          </div>
          <div>
            <p className={styles.price}>$3.92</p>
          </div>
        </div>
      </article>
      <div className={styles.button_container}>
        <Link href="#" className={styles.button}>
          View Menu
        </Link>
      </div>
    </section>
  );
};
