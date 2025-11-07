/**
 * @types ProductGrid
 * @summary Product grid component types
 * @domain product
 */

import type { Product } from '../../types';

export interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigateToDetail: (productId: string) => void;
}
