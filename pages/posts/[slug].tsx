import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { SmallHero } from '@/components/SmallHero/SmallHero';
import { PostPageType } from '@/types/types';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { PostSection } from '@/components/Pages/PostPage/PostSection/PostSection';

export default function PostPage(props: PostPageType) {
  return (
    <>
      <SmallHero title="Post" />
      <PostSection {...props} />
      <ScrollToTop />
    </>
  );
}
export async function getStaticPaths() {
  const basicPath = path.join(process.cwd(), 'pages/blog/posts');
  const files = fs.readdirSync(basicPath);
  const paths = files.map((filename) => ({ params: { slug: filename.replace('.md', '') } }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const basicPath = path.join(process.cwd(), 'pages/blog/posts');
  const markdownMeta = fs.readFileSync(`${basicPath}/${params?.slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(markdownMeta);
  return {
    props: {
      frontmatter,
      content,
      slug: params?.slug,
    },
  };
};
