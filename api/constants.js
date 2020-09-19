export const LANG_DEFAULT = 'ru'

export const LANG_LIST = [
  'ru',
  'sr'
]

export const PAGE_TYPE = {
  BLOG: 'blog',
  BLOG_PAGE: 'blog_page',
  PAGE: 'page',
  CATALOG: 'catalog',
  CATALOG_PAGE: 'catalog_page'
}

export const PAGES_TYPES = {
  'index': {
    type: PAGE_TYPE.PAGE
  },
  'news': {
    type: PAGE_TYPE.BLOG
  },
  'catalog': {
    type: PAGE_TYPE.CATALOG
  },
  'cases': {
    type: PAGE_TYPE.BLOG
  },
  'about': {
    type: PAGE_TYPE.PAGE
  },
}

export const i18n = {
  'index': {
    ru: 'Опора России. Сербский филиал',
    sr: 'Опора России. Сербский филиал'
  },
  'news': {
    ru: 'Новости',
    sr: 'Вести'
  },
  'cases': {
    ru: 'Кейсы',
    sr: 'Случајеви'
  },
  'about': {
    ru: 'О нас',
    sr: 'О нама'
  },
  'catalog': {
    ru: 'Каталог',
    sr: 'Каталог'
  },
}
