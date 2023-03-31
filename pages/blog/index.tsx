import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { Hero } from '@/components/Pages/BlogPage/Hero/Hero';
import { BlogSection } from '@/components/Pages/BlogPage/BlogSection/BlogSection';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { BlogPostType } from '@/types/types';
import { sortByDate } from '@/utills/sortByDate';

function BlogPage({ posts }: { posts: BlogPostType[] }) {
  return (
    <>
      <Hero />
      <BlogSection posts={posts} />
      <ScrollToTop />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const basicPath = path.join(process.cwd(), 'pages/blog/posts');
  const files = fs.readdirSync(basicPath);
  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const markdownMeta = fs.readFileSync(`${basicPath}/${file}`, 'utf-8');
    const { data: frontmatter } = matter(markdownMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts: posts.sort(sortByDate) },
  };
};

export default BlogPage;
