import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BlogPostType } from '@/types/types';
import styles from './BlogPost.module.css';

export const BlogPost = ({ post }: { post: BlogPostType }) => {
  return (
    <article className={styles.post}>
      <Image src={post.frontmatter.cover_image} alt="" width={600} height={600} className={styles.image} />
      <h2 className={styles.title}>{post.frontmatter.title}</h2>
      <p className={styles.author}>
        by {post.frontmatter.author} / {new Date(post.frontmatter.date).toLocaleDateString('gb-GB')}
      </p>
      <p>{post.frontmatter.excerpt}</p>
      <div>
        <Link href={`/posts/${post.slug}`} className={styles.button}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
    </article>
  );
};
