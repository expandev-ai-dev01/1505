import { Link, useNavigate } from 'react-router-dom';
import { APPLICATION_ROUTES } from '@/core/constants';
import { useCartStore } from '@/domain/cart/stores/cartStore';
import { Button } from '@/core/components';

/**
 * @component Header
 * @summary Application header with navigation and cart counter
 * @domain layout
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={APPLICATION_ROUTES.HOME} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-600">🍰</span>
          <span className="text-xl font-bold text-gray-900">Catálogo de Bolos</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to={APPLICATION_ROUTES.HOME}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
          >
            Início
          </Link>
          <Link
            to={APPLICATION_ROUTES.CATALOG}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
          >
            Catálogo
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(APPLICATION_ROUTES.CART)}
            className="relative"
          >
            🛒 Carrinho
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};
