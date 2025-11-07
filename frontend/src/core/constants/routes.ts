/**
 * @constants APPLICATION_ROUTES
 * @summary Application route paths
 * @category navigation
 */
export const APPLICATION_ROUTES = {
  HOME: '/',
  CATALOG: '/catalogo',
  PRODUCT_DETAIL: '/produto/:id',
  CART: '/carrinho',
} as const;

/**
 * @utility getProductDetailRoute
 * @summary Generates product detail route with ID
 */
export const getProductDetailRoute = (id: string | number): string => {
  return `/produto/${id}`;
};
