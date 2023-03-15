import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import postImage from '../../../../public/images/BlogPage/post-1.jpg';
import styles from './BlogPost.module.css';

export const BlogPost = () => {
  return (
    <article>
      <Image src={postImage} alt="" />
      <h2>Cattle above moveth moved. Second which.</h2>
      <p>by Sam Agile / 30.10.2022</p>
      <p>
        Give land moveth from all gathered male made beginning earth Gathering. Set bearing waters have without in
        spirit. Given. Brought two that beast creature give creepeth also don't gathering wherein day, all their you'll
        creeping midst third, beginning bearing every, from fourth meat, darkness is beast deep abundantly there
        abundantly.
      </p>
      <div>
        <Link href="#" className={styles.button}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
    </article>
  );
};
