import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { SmallHero } from '@/components/SmallHero/SmallHero';
import { BlogSection } from '@/components/Pages/BlogPage/BlogSection/BlogSection';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { BlogPostType } from '@/types/types';
import { sortByDate } from '@/utills/sortByDate';

const PER_PAGE = 3;

function BlogPage({
  posts,
  totalLength,
  currentPage,
}: {
  posts: BlogPostType[];
  totalLength: number;
  currentPage: number;
}) {
  return (
    <>
      <SmallHero title="Blog" />
      <BlogSection posts={posts} totalLength={totalLength} currentPage={currentPage} perPage={PER_PAGE} />
      <ScrollToTop />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const limit = PER_PAGE;
  const page = 1;

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
    props: { posts: paginatedPosts, totalLength, currentPage: 1 },
  };
};

export default BlogPage;
