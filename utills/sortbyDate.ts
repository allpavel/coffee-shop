export const sortByDate = (a: string, b: string): number => {
  return new Date(b).getTime() - new Date(a).getTime();
};
