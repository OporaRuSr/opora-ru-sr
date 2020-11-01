const LANG_LIST = [
  'ru',
  'sr'
]

const SECTION_TYPE = {
  BLOG: 'blog',
  BLOG_PAGE: 'blog_page',
  PAGE: 'page',
  CATALOG: 'catalog',
  CATALOG_PAGE: 'catalog_page',
  TAG_PAGE: 'tag_page'
}

const SECTIONS_LIST = {
  'news': {
    type: SECTION_TYPE.BLOG
  },
  'catalog': {
    type: SECTION_TYPE.CATALOG
  },
  'cases': {
    type: SECTION_TYPE.BLOG
  },
  'about': {
    type: SECTION_TYPE.PAGE
  },
  'index': {
    type: SECTION_TYPE.PAGE
  }
}

module.exports = {
  LANG_LIST,
  SECTIONS_LIST
}
