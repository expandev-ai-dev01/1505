/**
 * @component Footer
 * @summary Application footer
 * @domain layout
 * @type layout-component
 * @category navigation
 */
export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Catálogo de Bolos. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 transition-colors hover:text-primary-600">
              Sobre
            </a>
            <a href="#" className="text-sm text-gray-600 transition-colors hover:text-primary-600">
              Contato
            </a>
            <a href="#" className="text-sm text-gray-600 transition-colors hover:text-primary-600">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
