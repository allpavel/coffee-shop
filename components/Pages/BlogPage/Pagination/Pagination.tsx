import Link from 'next/link';
import { PaginationPage } from '@/types/types';
import { usePagination } from '@/hooks/usePagination';
import styles from './Pagination.module.css';

export const Pagination = ({ totalLength, perPage, currentPage, pageLink }: PaginationPage) => {
  const pages = usePagination(totalLength, currentPage, perPage);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {pages.map((pageNumber, i) =>
          pageNumber === '...' ? (
            <span key={i}>{pageNumber}</span>
          ) : (
            <Link
              key={i}
              href={pageLink(+pageNumber)}
              className={`${styles.link}${currentPage === pageNumber ? ` ${styles.active}` : ''}`}
            >
              {pageNumber}
            </Link>
          )
        )}
      </div>
    </section>
  );
};
