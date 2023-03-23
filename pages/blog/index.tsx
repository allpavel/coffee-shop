import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Hero } from '@/components/Pages/BlogPage/Hero/Hero';
// import { BlogSection } from '@/components/Pages/BlogPage/BlogSection/BlogSection';
// import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      {/* <BlogSection />
      <ScrollToTop /> */}
    </>
  );
}

export const getStaticProps = async () => {
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
    props: { posts },
  };
};
