# Catálogo de Bolos

Um catálogo digital para confeitaria com lista de produtos, filtros, detalhes dos bolos e funcionalidade de carrinho de compras.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Zustand 5.0.1

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes UI genéricos
│   ├── constants/        # Constantes da aplicação
│   ├── lib/             # Configurações de bibliotecas
│   ├── types/           # Tipos TypeScript globais
│   └── utils/           # Funções utilitárias
├── domain/               # Domínios de negócio (a implementar)
└── pages/                # Páginas da aplicação
    ├── layouts/         # Layouts compartilhados
    ├── Home/           # Página inicial
    ├── Catalog/        # Catálogo de produtos
    ├── ProductDetail/  # Detalhes do produto
    ├── Cart/           # Carrinho de compras
    └── NotFound/       # Página 404
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- ✅ Estrutura base configurada
- ✅ Roteamento com React Router
- ✅ Layout responsivo com Header e Footer
- ✅ Componentes UI base (Button, Card, LoadingSpinner)
- ⏳ Catálogo de produtos (a implementar)
- ⏳ Filtros de produtos (a implementar)
- ⏳ Detalhes do produto (a implementar)
- ⏳ Sistema de avaliações (a implementar)
- ⏳ Carrinho de compras (a implementar)
- ⏳ Dados mockados (a implementar)

## Próximos Passos

1. Implementar domínio de produtos com dados mockados
2. Criar componentes de catálogo e filtros
3. Implementar página de detalhes do produto
4. Adicionar sistema de avaliações
5. Implementar carrinho de compras com Zustand

## Licença

MIT