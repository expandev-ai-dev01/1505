/**
 * @component CartNotification
 * @summary Toast notification for cart additions
 * @domain cart
 * @type domain-component
 * @category feedback
 */

import { useEffect } from 'react';
import { formatCurrency } from '@/core/utils';
import { Button } from '@/core/components';
import type { CartNotificationProps } from './types';

export const CartNotification = ({
  productName,
  productImage,
  productPrice,
  isVisible,
  onClose,
  onGoToCart,
}: CartNotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-20 z-50 w-80 animate-slide-in-right">
      <div className="overflow-hidden rounded-lg border border-green-200 bg-white shadow-lg">
        <div className="bg-green-50 px-4 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-green-800">✓ Adicionado ao carrinho</p>
            <button
              onClick={onClose}
              className="text-green-600 hover:text-green-800"
              aria-label="Fechar notificação"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex space-x-3">
            <img
              src={productImage}
              alt={productName}
              className="h-16 w-16 rounded-md object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 line-clamp-2">{productName}</p>
              <p className="mt-1 text-sm font-bold text-primary-600">
                {formatCurrency(productPrice)}
              </p>
            </div>
          </div>

          <div className="mt-4 flex space-x-2">
            <Button variant="outline" size="sm" fullWidth onClick={onClose}>
              Continuar Comprando
            </Button>
            <Button size="sm" fullWidth onClick={onGoToCart}>
              Ir ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
