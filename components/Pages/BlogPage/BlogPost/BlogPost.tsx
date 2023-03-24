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
      <p>
        Give land moveth from all gathered male made beginning earth Gathering. Set bearing waters have without in
        spirit. Given. Brought two that beast creature give creepeth also don't gathering wherein day, all their you'll
        creeping midst third, beginning bearing every, from fourth meat, darkness is beast deep abundantly there
        abundantly.
      </p>
      <div>
        <Link href={post.slug} className={styles.button}>
          Read More <FaLongArrowAltRight className={styles.icon} />
        </Link>
      </div>
    </article>
  );
};
