export interface BlogPostType {
  slug: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
}
