import Link from 'next/link';
import { PaginationPage } from '@/types/types';
import { usePagination } from '@/hooks/usePagination';

export const Pagination = ({ totalLength, perPage, currentPage, pageLink }: PaginationPage) => {
  const pages = usePagination(totalLength, currentPage, perPage);

  return (
    <section>
      {pages.map((pageNumber, i) =>
        pageNumber === '...' ? (
          <span key={i}>{pageNumber}</span>
        ) : (
          <Link key={i} href={pageLink(+pageNumber)}>
            {pageNumber}
          </Link>
        )
      )}
    </section>
  );
};
