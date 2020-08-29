export const NEWS_DIR = 'news'
export const PAGES_DIR = 'pages'

export const LANG_DEFAULT = 'ru'

export const LANG_LIST = [
  'ru',
  'sr'
]

export const PAGES_LIST = [
  'index',
  'news',
  'catalog',
  'cases',
  'about',
]

export const PAGE_TYPE = {
  BLOG: 'blog',
  PAGE: 'page'
}

export const PAGES_TYPES = {
  'index': {
    type: PAGE_TYPE.PAGE
  },
  'news': {
    type: PAGE_TYPE.BLOG
  },
  'catalog': {
    type: PAGE_TYPE.BLOG
  },
  'cases': {
    type: PAGE_TYPE.BLOG
  },
  'about': {
    type: PAGE_TYPE.PAGE
  },
}
