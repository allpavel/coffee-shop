import { BlogPost } from '../BlogPost/BlogPost';
import { BlogPostType } from '@/types/types';
import styles from './BlogSection.module.css';

export const BlogSection = ({ posts }: { posts: BlogPostType[] }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};
