import { BlogSidebar } from '../BlogSidebar/BlogSidebar';
import { marked } from 'marked';
import styles from './PostSection.module.css';
import { PostPageType } from '@/types/types';
import Image from 'next/image';

export const PostSection = ({ frontmatter, content, slug }: PostPageType) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <article className={styles.post}>
          <Image src={frontmatter.cover_image} alt="" width={740} height={565} className={styles.image} />
          <h2 className={styles.title}>{frontmatter.title}</h2>
          <p className={styles.author}>{`by ${frontmatter.author} / ${frontmatter.date}`}</p>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} className={styles.text}></div>
        </article>
      </div>
      <BlogSidebar />
    </section>
  );
};
