/**
 * @component ProductGrid
 * @summary Grid layout for product cards
 * @domain product
 * @type domain-component
 * @category layout
 */

import { ProductCard } from '../ProductCard';
import type { ProductGridProps } from './types';

export const ProductGrid = ({ products, onAddToCart, onNavigateToDetail }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Nenhum produto encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onNavigateToDetail={onNavigateToDetail}
        />
      ))}
    </div>
  );
};
