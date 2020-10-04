// api/index.js
import matter from 'gray-matter'
import marked from 'marked'
import React from 'react'
import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

import {PAGE_TYPE, PAGE_HEADERS, PAGES_TYPES, LANG_LIST} from './constants'

export function getPageType(name) {
  return PAGES_TYPES[name].type
}

export async function getPageLinks(sortType=null) {
  const ret = []
  LANG_LIST.forEach( item => {
    Object.keys(PAGES_TYPES).forEach(item2=>{
      if (!sortType) {
        ret.push(`/${item}/${item2}`)
        return
      }
      if (PAGES_TYPES[item2].type === sortType) {
        ret.push(`/${item}/${item2}`)
      }
    })
  })
  return ret
}

export async function getAllCatalogPageLinks () {
  const result = []
  const links = await getPageLinks(PAGE_TYPE.CATALOG)
  links.forEach(catalogDir => {
    const uri = path.join(CONTENT_DIR, catalogDir)
    const dir = fs.readdirSync(uri)
    dir.forEach( fileName => {
      if (fileName.endsWith('.md')) {
        const filePath = path.join(catalogDir, 'page', fileName).replace('.md','')
        result.push(filePath)
      }
    })
  })
  return result
}

export async function getAllBlogPageLinks() {
  const result = []
  const links = await getPageLinks(PAGE_TYPE.BLOG)
  // console.log(links)
  links.forEach(blogDir => {
    const uri = path.join(CONTENT_DIR, blogDir)
    const dir = fs.readdirSync(uri)
    dir.forEach( fileName => {
      if (fileName.endsWith('.md')) {
        const filePath = path.join(blogDir, fileName).replace('.md','')
        result.push(filePath)
      }
    })
  })
  // console.log(result)
  return result
}

export async function getBlogPage({lang,slug}) {
  const uri = `${CONTENT_DIR}/${lang}/${slug}.md`
  const fileContent = fs.readFileSync(uri).toString();
  const meta = matter(fileContent)
  console.log('getBlogPage', meta)
  const datastr = __getDataFromName(`${slug}.md`)
  return {
    datastr,
    meta: meta.data,
    content: meta.content
  }
}

const __getDataFromName = (name) => {  
  const lastSLashNum = name.lastIndexOf('/')
  if ( lastSLashNum !== -1 ){
   name = name.substr(lastSLashNum+1)
  }
  const part = name.replace('.md','').split('-')
  return `${part[2]}.${part[1]}.${part[0]} ${part[3]}:${part[4]}`
}

export async function getBlog(props) {
  const {lang, slug} = props
  let links = []
  // console.log('getBlog ', lang, slug)
  const uri = `${CONTENT_DIR}/${lang}/${slug}`
  // console.log('getBlog uri', uri)
  const dir = fs.readdirSync(uri)
  dir.sort().reverse()
  dir.map( item => {
    if (!item.endsWith('.md')) {
      return
    }
    const fileContent = fs.readFileSync(`${uri}/${item}`).toString();
    const meta = matter(fileContent)
    const pageUri = String(`/${lang}/${slug}/${item}`).replace('.md','')
    // console.log('getBlog item', item, meta)
    
    const datastr = __getDataFromName(item)

    links.push({
      datastr,
      title: meta.data.title,
      description: meta.data.description,
      newsimage: meta.data.newsimage,
      url: pageUri
    })
  })
  // console.log('getBlog payload', links)
  const title = PAGE_HEADERS[slug][lang]
  return {
    title,
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
  // console.log(meta)
  return {
    title: meta.data.title,
    content: meta.content
  }
}

export function parseTags (tags) {
  const tagList = tags.split(',').map( item => {
    return item.trim()
  })
  return tagList
}

const __tagsToLinks = (baseurl, tags) => {
  return tags.map( tag => {
    return {
      name: tag.trim(),
      link: path.join('/', baseurl, 'tags', tag.trim())
    }
  })
}

export async function getCatalogPage(props) {
  console.log('getCatalogPage')
  const {lang, slug} = props
  const uri = `${CONTENT_DIR}/${lang}/${slug}.md`
  const fileContent = fs.readFileSync(uri).toString();
  // console.log(fileContent)
  const meta = matter(fileContent)
  console.log(meta)
  const baseUrl = path.join(lang,slug)
  // console.log(meta.data.tags)
  const pageTags = __tagsToLinks(baseUrl, parseTags(meta.data.tags))
  // console.log(pageTags)
  console.log('getCatlogPage', meta.content)
  return {
    meta: meta.data,
    content: meta.content,
    pageTags
  }
}

export async function getCatalog(props) {
  // console.log('getCatalog ', props)
  const {lang, slug} = props
  const uri = path.join(CONTENT_DIR, lang, slug)
  // console.log('getCatalog uri', uri)
  const dir = fs.readdirSync(uri)
  const tags = []
  const links = []
  dir.map( item => {
    if (!item.endsWith('.md')) {
      return
    }
    const fileContent = fs.readFileSync(`${uri}/${item}`).toString();
    const meta = matter(fileContent)
    const pageUri = path.join('/', lang, slug, 'page', item).replace('.md','')
    const tagList = parseTags(meta.data.tags)

    links.push({
      title: meta.data.title,
      description: meta.data.description,
      newsimage: meta.data.newsimage,
      url: pageUri
    })

    // console.log(tagList)
    tagList.forEach( item => {
      tags[item]=''
    })
    // console.log(tags)
  })

  const title = PAGE_HEADERS[slug][lang]
  const baseUrl = path.join(lang,slug)    
  return {
    title,
    links,
    tags: __tagsToLinks(baseUrl, Object.keys(tags))
  }
}

export async function getPayload({type, lang, slug}) {
  switch (type) {
    case PAGE_TYPE.PAGE:
      return getPage({lang, slug})
    case PAGE_TYPE.BLOG:
      return getBlog({lang, slug})
    case PAGE_TYPE.BLOG_PAGE:
      return getBlogPage({lang, slug})
    case PAGE_TYPE.CATALOG:
      return getCatalog({lang, slug})
    case PAGE_TYPE.CATALOG_PAGE:
        return getCatalogPage({lang, slug})  
      default:
      return {}
  }
}
