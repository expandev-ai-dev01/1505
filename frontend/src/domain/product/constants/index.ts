/**
 * @constants product
 * @summary Product domain constants
 * @domain product
 */

export const ITEMS_PER_PAGE_OPTIONS = [12, 24, 36, 48] as const;

export const DEFAULT_ITEMS_PER_PAGE = 12;

export const SORT_OPTIONS = [
  { value: 'relevancia', label: 'Relevância' },
  { value: 'preco_crescente', label: 'Menor Preço' },
  { value: 'preco_decrescente', label: 'Maior Preço' },
  { value: 'nome_az', label: 'Nome (A-Z)' },
  { value: 'nome_za', label: 'Nome (Z-A)' },
  { value: 'avaliacao', label: 'Melhor Avaliação' },
] as const;

export const PRODUCT_CATEGORIES = [
  'Bolos de Aniversário',
  'Bolos de Casamento',
  'Bolos Gourmet',
  'Tortas',
  'Cupcakes',
  'Doces Finos',
] as const;

export const PRODUCT_SIZES = ['Pequeno', 'Médio', 'Grande', 'Extra Grande'] as const;

export const PRODUCT_FLAVORS = [
  'Chocolate',
  'Morango',
  'Baunilha',
  'Limão',
  'Coco',
  'Frutas Vermelhas',
  'Doce de Leite',
  'Prestígio',
] as const;
