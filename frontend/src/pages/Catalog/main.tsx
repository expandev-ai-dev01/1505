/**
 * @page CatalogPage
 * @summary Product catalog page with filters and pagination
 * @domain catalog
 * @type list-page
 * @category catalog
 */

import { useNavigate } from 'react-router-dom';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { useCartStore } from '@/domain/cart/stores/cartStore';
import { useCartNotification } from '@/domain/cart/hooks/useCartNotification';
import { ProductGrid } from '@/domain/product/components/ProductGrid';
import { CatalogControls } from '@/domain/product/components/CatalogControls';
import { Pagination } from '@/domain/product/components/Pagination';
import { CartNotification } from '@/domain/cart/components/CartNotification';
import { LoadingSpinner } from '@/core/components';
import { getProductDetailRoute, APPLICATION_ROUTES } from '@/core/constants';
import type { Product } from '@/domain/product/types';

export const CatalogPage = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const { showNotification, notification, isVisible, hideNotification } = useCartNotification();

  const {
    displayedProducts,
    currentPage,
    itemsPerPage,
    totalPages,
    totalProducts,
    sortOption,
    isLoading,
    setCurrentPage,
    setItemsPerPage,
    setSortOption,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    canGoNext,
    canGoPrevious,
  } = useProductList();

  const handleAddToCart = (product: Product) => {
    if (!product.available) return;

    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });

    showNotification({
      productId: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  const handleNavigateToDetail = (productId: string) => {
    navigate(getProductDetailRoute(productId));
  };

  const handleGoToCart = () => {
    hideNotification();
    navigate(APPLICATION_ROUTES.CART);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Catálogo de Produtos</h1>
        <p className="mt-2 text-gray-600">
          Descubra nossa seleção especial de bolos e doces artesanais
        </p>
      </div>

      <CatalogControls
        totalProducts={totalProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        sortOption={sortOption}
        onSortChange={setSortOption}
        onItemsPerPageChange={setItemsPerPage}
      />

      <ProductGrid
        products={displayedProducts}
        onAddToCart={handleAddToCart}
        onNavigateToDetail={handleNavigateToDetail}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onFirstPage={goToFirstPage}
          onLastPage={goToLastPage}
          onNextPage={goToNextPage}
          onPreviousPage={goToPreviousPage}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
        />
      )}

      {notification && (
        <CartNotification
          productName={notification.name}
          productImage={notification.image}
          productPrice={notification.price}
          isVisible={isVisible}
          onClose={hideNotification}
          onGoToCart={handleGoToCart}
        />
      )}
    </div>
  );
};

export default CatalogPage;
