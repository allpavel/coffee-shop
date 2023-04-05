import { marked } from 'marked';
import { FaTwitter, FaFacebookF, FaTumblr, FaLinkedinIn } from 'react-icons/fa';
import { BlogSidebar } from '../BlogSidebar/BlogSidebar';
import { GoBackButton } from '@/components/GoBackButton/GoBackButton';
import { PostPageType } from '@/types/types';
import Image from 'next/image';
import styles from './PostSection.module.css';

export const PostSection = ({ frontmatter, content }: PostPageType) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <GoBackButton />
        <article className={styles.post}>
          <Image src={frontmatter.cover_image} alt="" width={740} height={565} className={styles.image} />
          <h2 className={styles.title}>{frontmatter.title}</h2>
          <p className={styles.author}>{`by ${frontmatter.author} / ${new Date(frontmatter.date).toLocaleDateString(
            'gb-GB'
          )}`}</p>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} className={styles.text}></div>
        </article>
        <section className={styles.author_section}>
          <section className={styles.share}>
            <p>
              Tags: <span className={styles.icons}>Artists</span>, <span className={styles.icons}>Exhibitions</span>
            </p>
            <div className={styles.social_cards}>
              <p>Share: </p>
              <div className={styles.social_icons}>
                <FaFacebookF className={styles.icons} />
                <FaLinkedinIn className={styles.icons} />
                <FaTumblr className={styles.icons} />
                <FaTwitter className={styles.icons} />
              </div>
            </div>
          </section>
          <section className={styles.author_card}>
            <Image src={frontmatter.author_image} alt="" width={175} height={175} />
            <div>
              <h3 className={styles.author_title}>{frontmatter.author}</h3>
              <p>{frontmatter.author_description}</p>
            </div>
          </section>
        </section>
        <GoBackButton />
      </div>
      <BlogSidebar />
    </section>
  );
};
