import { BlogPost } from '../BlogPost/BlogPost';
import { BlogSidebar } from '../BlogSidebar/BlogSidebar';
import { Pagination } from '../Pagination/Pagination';
import { BlogPostType } from '@/types/types';
import styles from './BlogSection.module.css';

export const BlogSection = ({
  posts,
  totalLength,
  currentPage,
  perPage,
}: {
  posts: BlogPostType[];
  totalLength: number;
  currentPage: number;
  perPage: number;
}): JSX.Element => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          {posts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>
        <BlogSidebar />
      </section>
      <Pagination
        totalLength={totalLength}
        posts={posts}
        currentPage={currentPage}
        perPage={perPage}
        pageLink={(page) => `/blog/${page}`}
      />
    </>
  );
};
