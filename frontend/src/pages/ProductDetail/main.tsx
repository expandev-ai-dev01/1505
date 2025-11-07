import { useParams } from 'react-router-dom';

/**
 * @page ProductDetailPage
 * @summary Product detail page
 * @domain catalog
 * @type detail-page
 * @category catalog
 */
export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Detalhes do Produto</h1>
      <p className="mt-2 text-gray-600">Produto ID: {id}</p>
      <p className="mt-2 text-gray-600">Página em construção - Detalhes serão implementados</p>
    </div>
  );
};

export default ProductDetailPage;
