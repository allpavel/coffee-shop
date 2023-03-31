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

export interface PostPageType {
  frontmatter: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
  slug: string;
  content: string;
}
