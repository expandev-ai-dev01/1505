/**
 * @types CatalogControls
 * @summary Catalog controls component types
 * @domain product
 */

import type { SortOption } from '../../types';

export interface CatalogControlsProps {
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  onItemsPerPageChange: (items: number) => void;
}
