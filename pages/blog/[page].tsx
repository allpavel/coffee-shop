import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogSection } from '@/components/Pages/BlogPage/BlogSection/BlogSection';
import { Hero } from '@/components/Pages/BlogPage/Hero/Hero';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { sortByDate } from '@/utills/sortByDate';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { BlogPostType } from '@/types/types';

const PER_PAGE = 3;

interface PageProps {
  posts: BlogPostType[];
  currentPage: number;
  totalLength: number;
}

function PaginatedPage({ posts, currentPage, totalLength }: PageProps) {
  return (
    <>
      <Hero />
      <BlogSection posts={posts} currentPage={currentPage} totalLength={totalLength} perPage={3} />
      <ScrollToTop />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from({ length: 5 }).map((_, i) => `/blog/${i + 2}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;
  const limit = PER_PAGE;

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
  posts.sort(sortByDate);
  const totalLength = posts.length;
  const paginatedPosts = posts.slice((page - 1) * limit, page * limit);

  return {
    props: { posts: paginatedPosts, totalLength, currentPage: page },
    revalidate: 60 * 60 * 24,
  };
};

export default PaginatedPage;
