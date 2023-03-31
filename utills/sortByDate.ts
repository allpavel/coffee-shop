interface SortType {
  slug: string;
  frontmatter: { [key: string]: any };
}

export const sortByDate = (a: SortType, b: SortType): number => {
  return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
};
