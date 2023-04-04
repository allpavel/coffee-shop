const getPages = (length: number, inc: number = 1) => Array.from({ length }, (_, i) => i + inc);

export const usePagination = (totalLength: number, currentPage: number, perPage: number) => {
  const totalPages = Math.ceil(totalLength / perPage);
  if (totalPages <= 5) {
    return getPages(totalPages);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages];
  }
  if (currentPage < totalPages - 2) {
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  }
  return [1, '...', ...getPages(4, totalPages - 3)];
};
