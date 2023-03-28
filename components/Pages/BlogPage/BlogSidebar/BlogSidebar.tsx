import Image from 'next/image';
import { FaInstagram, FaTwitter, FaFacebookF, FaTumblr, FaVimeoV, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import author from '../../../../public/images/BlogPage/author.png';
import post1 from '../../../../public/images/BlogPage/post-1.jpg';
import post2 from '../../../../public/images/BlogPage/post-2.jpg';
import post3 from '../../../../public/images/BlogPage/post-3.jpg';
import styles from './BlogSidebar.module.css';

export const BlogSidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.card}>
        <h3 className={styles.title}>About</h3>
        <Image src={author} alt="Man in white shirt" className={styles.image} />
        <p>
          Fruit thing green may gathering sea likeness his. Bring god land given. Great that give fly can't bring. Make
          years set own darkness, seed appear every fly air female multiply land. That winged made, very winged, them
          signs i under.
        </p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.title}>Recent Posts</h3>
        <div className={styles.recent}>
          <Image src={post1} alt="" className={styles.recent_image} />
          <div>
            <h3 className={`${styles.title} ${styles.recent_title}`}>Make it Simple</h3>
            <p className={styles.recent_text}>23.10.2022</p>
          </div>
        </div>
        <div className={styles.recent}>
          <Image src={post2} alt="" className={styles.recent_image} />
          <div>
            <h3 className={`${styles.title} ${styles.recent_title}`}>Coffee shop</h3>
            <p className={styles.recent_text}>14.07.2021</p>
          </div>
        </div>
        <div className={styles.recent}>
          <Image src={post3} alt="" className={styles.recent_image} />
          <div>
            <h3 className={`${styles.title} ${styles.recent_title}`}>Coffee bar</h3>
            <p className={styles.recent_text}>08.12.2020</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.title}>Categories</h3>
        <ul className={styles.list}>
          <li className={styles.list_item}>Competition (3)</li>
          <li className={styles.list_item}>Life (3)</li>
          <li className={styles.list_item}>Media (14)</li>
          <li className={styles.list_item}>Lifestyle (10)</li>
          <li className={styles.list_item}>Enjoyment (8)</li>
        </ul>
      </div>
      <div className={styles.card}>
        <h3 className={styles.title}>Follow Us</h3>
        <div className={styles.socials}>
          <FaInstagram className={styles.socials__icon} />
          <FaTwitter className={styles.socials__icon} />
          <FaFacebookF className={styles.socials__icon} />
          <FaTumblr className={styles.socials__icon} />
          <FaVimeoV className={styles.socials__icon} />
          <FaLinkedinIn className={styles.socials__icon} />
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.title}>Tags</h3>
        <div className={styles.tags}>
          <span>Artists</span>
          <span>Jobs</span>
          <span>Features</span>
          <span>Lectures</span>
          <span>Recipes</span>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.title}>Search</h3>
        <form>
          <input type={'search'} />
          <input type={'submit'} value={'Search'} className={styles.search} />
        </form>
      </div>
    </section>
  );
};
