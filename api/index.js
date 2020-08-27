// api/index.js
import matter from 'gray-matter'
import marked from 'marked'
import React from 'react'
import fs from 'fs'

import Page from '../components/Page'

const CONTENT_DIR = process.cwd()+'/content'
const NEWS_DIR = 'news'
const PAGES_DIR = 'pages'

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

const PAGES_TYPES = {
  'index': {
    type: 'page'
  },
  'news': {
    type: 'blog'
  },
  'catalog': {
    type: 'blog'
  },
  'cases': {
    type: 'blog'
  },
  'about': {
    type: 'page'
  },
}

const getUri = ({lang, type, slug}) => {
  return `${CONTENT_DIR}/${lang}/${type}/${slug}`
}

export function getPageType(name) {
  return PAGES_TYPES[name].type
}

export async function getPageLinks() {
  const ret = []
  LANG_LIST.forEach(item=>{
    Object.keys(PAGES_TYPES).forEach(item2=>{
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
  console.log(process.cwd());
  const uri = getUri({
    lang,
    type: PAGES_DIR,
    slug
  })+'.md'
  console.log('getPage ', uri)
  const fileContent = fs.readFileSync(uri).toString();
  const meta = matter(fileContent)
  const content = marked(meta.content)
  return {
    title: uri,
    content: content
  }
}
