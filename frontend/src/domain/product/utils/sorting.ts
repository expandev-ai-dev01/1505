/**
 * @utility sorting
 * @summary Product sorting utilities
 * @domain product
 */

import type { Product, SortOption } from '../types';

export const sortProducts = (products: Product[], sortOption: SortOption): Product[] => {
  const sorted = [...products];

  switch (sortOption) {
    case 'relevancia':
      return sorted.sort((a, b) => {
        const scoreA =
          a.popularity * 0.4 +
          a.rating * 20 * 0.4 +
          (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) * 0.2;
        const scoreB =
          b.popularity * 0.4 +
          b.rating * 20 * 0.4 +
          (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * 0.2;
        return scoreB - scoreA;
      });

    case 'preco_crescente':
      return sorted.sort((a, b) => a.price - b.price);

    case 'preco_decrescente':
      return sorted.sort((a, b) => b.price - a.price);

    case 'nome_az':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case 'nome_za':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));

    case 'avaliacao':
      return sorted.sort((a, b) => b.rating - a.rating);

    default:
      return sorted;
  }
};

export const calculateDiscount = (price: number, originalPrice?: number): number | null => {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};
