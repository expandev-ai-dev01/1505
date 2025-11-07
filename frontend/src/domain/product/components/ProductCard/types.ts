/**
 * @types ProductCard
 * @summary Product card component types
 * @domain product
 */

import type { Product } from '../../types';

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onNavigateToDetail: (productId: string) => void;
}
