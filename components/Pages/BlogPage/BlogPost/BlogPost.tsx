import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BlogPostType } from '@/types/types';
import styles from './BlogPost.module.css';

export const BlogPost = ({ post }: { post: BlogPostType }) => {
  return (
    <article>
      <Image src={post.frontmatter.cover_image} alt="" width={400} height={400} />
      <h2>{post.frontmatter.title}</h2>
      <p>
        by {post.frontmatter.author} / {post.frontmatter.date}
      </p>
      <p>{post.frontmatter.excerpt}</p>
      <div>
        <Link href={post.slug} className={styles.button}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
    </article>
  );
};
