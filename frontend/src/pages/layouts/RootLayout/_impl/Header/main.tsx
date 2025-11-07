import { Link, useNavigate } from 'react-router-dom';
import { APPLICATION_ROUTES } from '@/core/constants';
import { Button } from '@/core/components';

/**
 * @component Header
 * @summary Application header with navigation
 * @domain layout
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  const navigate = useNavigate();

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
          <Button variant="outline" size="sm" onClick={() => navigate(APPLICATION_ROUTES.CART)}>
            🛒 Carrinho
          </Button>
        </nav>
      </div>
    </header>
  );
};
