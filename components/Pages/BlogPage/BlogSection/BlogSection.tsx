import { BlogPost } from '../BlogPost/BlogPost';
import styles from './BlogSection.module.css';

export const BlogSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <BlogPost />
      </div>
    </section>
  );
};
