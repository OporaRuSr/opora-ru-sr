// api/index.js
import matter from 'gray-matter'
import marked from 'marked'
import React from 'react'

import MockNews from '../mocks/MockNews'

const CONTENT_DIR = '../content'
const NEWS_DIR = '_news'
const PAGES_DIR = '_pages'

const LANG_DEFAULT = 'ru'

const LANG_LIST = [
  'ru',
  'sr'
]

const PAGES_LIST = [
  'index',
  'news',
  'catalog',
  'cases',
  'about',
]

const getUri = ({lang, type, slug}) => {
  return `${CONTENT_DIR}/${lang}/${type}/${slug}`
}

export async function getPageLinks() {
  const ret = []
  LANG_LIST.forEach(item=>{
    PAGES_LIST.forEach(item2=>{
      ret.push(`/${item}/${item2}`)
    })
  })
  return ret
}

// export async function getAllPosts(lang) {
//   const context = require.context(`${NEWS_DIR}/${lang}`, false, /\.md$/)
//   const posts = []
//   for(const key of context.keys()){
//     const post = key.slice(2);
//     const content = await import(`${NEWS_DIR}/${lang}/${post}`);
//     const meta = matter(content.default)
//     posts.push({
//       slug: post.replace('.md',''),
//       title: meta.data.title
//     })
//   }
//   return posts;
// }

export async function getPage(props) {
  const {lang, slug} = props
  console.log('getPage ', lang, slug)
  const uri = getUri({
    lang,
    type: PAGES_DIR,
    slug
  })+'.md'
  // const fileContent = await import(uri)
  // const meta = matter(fileContent.default)
  // const content = marked(meta.content)
  return {
    title: uri,
    content: uri
  }
}
