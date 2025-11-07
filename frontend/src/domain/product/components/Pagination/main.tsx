/**
 * @component Pagination
 * @summary Pagination controls for product list
 * @domain product
 * @type domain-component
 * @category navigation
 */

import { Button } from '@/core/components';
import type { PaginationProps } from './types';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPreviousPage,
  canGoNext,
  canGoPrevious,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="mt-8 flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onFirstPage}
        disabled={!canGoPrevious}
        aria-label="Primeira página"
      >
        ««
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onPreviousPage}
        disabled={!canGoPrevious}
        aria-label="Página anterior"
      >
        «
      </Button>

      {getPageNumbers().map((page, index) => (
        <div key={index}>
          {typeof page === 'number' ? (
            <Button
              variant={currentPage === page ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPageChange(page)}
              className="min-w-[40px]"
            >
              {page}
            </Button>
          ) : (
            <span className="px-2 text-gray-500">{page}</span>
          )}
        </div>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={onNextPage}
        disabled={!canGoNext}
        aria-label="Próxima página"
      >
        »
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onLastPage}
        disabled={!canGoNext}
        aria-label="Última página"
      >
        »»
      </Button>
    </div>
  );
};
