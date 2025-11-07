/**
 * @component ProductCard
 * @summary Product card display component
 * @domain product
 * @type domain-component
 * @category display
 */

import { formatCurrency } from '@/core/utils';
import { Button } from '@/core/components';
import { calculateDiscount } from '../../utils/sorting';
import type { ProductCardProps } from './types';

export const ProductCard = ({ product, onAddToCart, onNavigateToDetail }: ProductCardProps) => {
  const discount = calculateDiscount(product.price, product.originalPrice);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ⯨
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {discount && (
        <div className="absolute left-2 top-2 z-10 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white">
          -{discount}%
        </div>
      )}

      <button
        onClick={() => onNavigateToDetail(product.id)}
        className="relative aspect-square w-full overflow-hidden bg-gray-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </button>

      <div className="flex flex-1 flex-col p-4">
        <button
          onClick={() => onNavigateToDetail(product.id)}
          className="mb-2 text-left text-sm font-semibold text-gray-900 line-clamp-2 hover:text-primary-600"
        >
          {product.name}
        </button>

        <p className="mb-3 text-xs text-gray-600 line-clamp-2">{product.shortDescription}</p>

        <div className="mb-3 flex items-center space-x-1">
          <div className="flex text-sm">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="mt-auto">
          {product.originalPrice && (
            <p className="text-xs text-gray-500 line-through">
              {formatCurrency(product.originalPrice)}
            </p>
          )}
          <p className="mb-3 text-xl font-bold text-gray-900">{formatCurrency(product.price)}</p>

          <Button
            fullWidth
            size="sm"
            disabled={!product.available}
            onClick={() => onAddToCart(product)}
            className="transition-colors"
          >
            {product.available ? '🛒 Adicionar ao Carrinho' : 'Indisponível'}
          </Button>
        </div>
      </div>
    </div>
  );
};
