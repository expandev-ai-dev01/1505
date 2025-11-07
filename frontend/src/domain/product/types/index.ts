/**
 * @module product/types
 * @summary Product domain type definitions
 * @domain product
 */

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  available: boolean;
  category: string;
  size: string;
  flavor: string;
  popularity: number;
  createdAt: string;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  flavor?: string;
  size?: string;
  minRating?: number;
}

export type SortOption =
  | 'relevancia'
  | 'preco_crescente'
  | 'preco_decrescente'
  | 'nome_az'
  | 'nome_za'
  | 'avaliacao';

export interface ProductListParams {
  page: number;
  limit: number;
  sort: SortOption;
  filters?: ProductFilters;
}
