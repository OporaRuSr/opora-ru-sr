// api/index.js
import matter from 'gray-matter'
import marked from 'marked'
import React from 'react'
import fs from 'fs'

const CONTENT_DIR = process.cwd()+'/content'

import {PAGE_TYPE, PAGES_TYPES, LANG_LIST} from './constants'

export function getPageType(name) {
  return PAGES_TYPES[name].type
}

export async function getPageLinks() {
  const ret = []
  LANG_LIST.forEach( item => {
    Object.keys(PAGES_TYPES).forEach(item2=>{
      ret.push(`/${item}/${item2}`)
    })
  })
  return ret
}

export async function getAllBlogPageLinks() {
  // const pageLinks = await getAllBlogs()
  // const pages = []
  // pageLinks.forEach(item => {
  //   console.log(item)
  // })
  return [
    '/ru/news/2020-08-29-ffds',
    '/ru/news/2020-08-29-дом'
  ]
}

export async function getBlogPage(slug) {
  const uri = `${CONTENT_DIR}/${slug}.md`
  const fileContent = fs.readFileSync(uri).toString();
  const meta = matter(fileContent)
  const content = marked(meta.content)
  return {
    title: uri,
    content: content
  }
}

export async function getBlog(props) {
  const {lang, slug} = props
  let links = []
  // console.log('getBlog ', lang, slug)
  const uri = `${CONTENT_DIR}/${lang}/${slug}`
  // console.log('getBlog uri', uri)
  const dir = fs.readdirSync(uri)
  dir.map( item => {
    const fileContent = fs.readFileSync(`${uri}/${item}`).toString();
    const meta = matter(fileContent)
    const pageUri = String(`/${lang}/${slug}/${item}`).replace('.md','')
    // console.log('getBlog item', item, meta)
    links.push({
      title: meta.data.title,
      url: pageUri
    })
  })
  // console.log('getBlog payload', links)
  return {
    title: uri,
    links
  }
}

export async function getPage(props) {
  const {lang, slug} = props
  // console.log('getPage ', lang, slug)
  const uri = `${CONTENT_DIR}/${lang}/pages/${slug}.md`
  // console.log('getPage ', uri)
  const fileContent = fs.readFileSync(uri).toString();
  const meta = matter(fileContent)
  const content = marked(meta.content)
  return {
    title: uri,
    content: content
  }
}

export async function getPayload({type, lang, slug}) {
  switch (type) {
    case PAGE_TYPE.PAGE:
      return getPage({lang, slug})
    case PAGE_TYPE.BLOG:
      return getBlog({lang, slug})
    default:
      return {}
  }
}
