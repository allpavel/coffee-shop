export interface BlogPostType {
  slug: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    cover_image: string;
    author_image: string;
    author_description: string;
  };
}

export interface PostPageType {
  frontmatter: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    cover_image: string;
    author_image: string;
    author_description: string;
  };
  slug: string;
  content: string;
}

export interface PaginationPage {
  totalLength: number;
  perPage: number;
  currentPage: number;
  pageLink: (page: number) => string;
  posts: BlogPostType[];
}
