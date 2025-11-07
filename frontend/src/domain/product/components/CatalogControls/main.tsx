/**
 * @component CatalogControls
 * @summary Catalog sorting and display controls
 * @domain product
 * @type domain-component
 * @category form
 */

import { SORT_OPTIONS, ITEMS_PER_PAGE_OPTIONS } from '../../constants';
import type { CatalogControlsProps } from './types';
import type { SortOption } from '../../types';

export const CatalogControls = ({
  totalProducts,
  currentPage,
  totalPages,
  itemsPerPage,
  sortOption,
  onSortChange,
  onItemsPerPageChange,
}: CatalogControlsProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  return (
    <div className="mb-6 flex flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:space-y-0">
      <div className="text-sm text-gray-600">
        Exibindo <span className="font-semibold">{startItem}</span> a{' '}
        <span className="font-semibold">{endItem}</span> de{' '}
        <span className="font-semibold">{totalProducts}</span> produtos
      </div>

      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Ordenar por:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="items-per-page" className="text-sm font-medium text-gray-700">
            Exibir:
          </label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option} itens
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
