import { useNavigate } from 'react-router-dom';
import { APPLICATION_ROUTES } from '@/core/constants';
import { Button, Card } from '@/core/components';

/**
 * @page HomePage
 * @summary Landing page with welcome message and call-to-action
 * @domain public
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Bem-vindo ao Catálogo de Bolos</h1>
          <p className="text-xl text-gray-600">Descubra os melhores bolos artesanais da região</p>
        </div>

        <div className="flex space-x-4">
          <Button size="lg" onClick={() => navigate(APPLICATION_ROUTES.CATALOG)}>
            Ver Catálogo
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate(APPLICATION_ROUTES.CATALOG)}>
            Explorar Produtos
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
          <Card className="p-6">
            <div className="space-y-2 text-center">
              <div className="text-4xl">🍰</div>
              <h3 className="text-lg font-semibold text-gray-900">Variedade</h3>
              <p className="text-sm text-gray-600">
                Diversos sabores e tamanhos para todas as ocasiões
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2 text-center">
              <div className="text-4xl">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900">Qualidade</h3>
              <p className="text-sm text-gray-600">
                Produtos artesanais feitos com ingredientes selecionados
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2 text-center">
              <div className="text-4xl">🚚</div>
              <h3 className="text-lg font-semibold text-gray-900">Entrega</h3>
              <p className="text-sm text-gray-600">Entregamos com segurança e pontualidade</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
