import { useNavigate } from 'react-router-dom';
import { APPLICATION_ROUTES } from '@/core/constants';
import { Button } from '@/core/components';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain public
 * @type error-page
 * @category public
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
        <p className="mt-2 text-gray-500">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Button onClick={() => navigate(APPLICATION_ROUTES.HOME)}>Voltar para Início</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
