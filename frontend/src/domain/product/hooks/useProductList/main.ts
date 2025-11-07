/**
 * @hook useProductList
 * @summary Manages product list with pagination and sorting
 * @domain product
 * @type domain-hook
 * @category data
 */

import { useState, useMemo, useCallback } from 'react';
import { MOCK_PRODUCTS } from '../../utils/mockData';
import { sortProducts } from '../../utils/sorting';
import { DEFAULT_ITEMS_PER_PAGE } from '../../constants';
import type { UseProductListOptions, UseProductListReturn } from './types';
import type { SortOption } from '../../types';

export const useProductList = (options: UseProductListOptions = {}): UseProductListReturn => {
  const {
    initialPage = 1,
    initialItemsPerPage = DEFAULT_ITEMS_PER_PAGE,
    initialSort = 'relevancia',
  } = options;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortOption, setSortOption] = useState<SortOption>(initialSort);
  const [isLoading] = useState(false);

  const sortedProducts = useMemo(() => {
    return sortProducts(MOCK_PRODUCTS, sortOption);
  }, [sortOption]);

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, itemsPerPage]);

  const handleSetItemsPerPage = useCallback((items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  }, []);

  const handleSetSortOption = useCallback((sort: SortOption) => {
    setSortOption(sort);
    setCurrentPage(1);
  }, []);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const goToLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  return {
    products: sortedProducts,
    displayedProducts,
    currentPage,
    itemsPerPage,
    totalPages,
    totalProducts,
    sortOption,
    isLoading,
    setCurrentPage,
    setItemsPerPage: handleSetItemsPerPage,
    setSortOption: handleSetSortOption,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    canGoNext,
    canGoPrevious,
  };
};
