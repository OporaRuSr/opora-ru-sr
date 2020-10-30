import matter from 'gray-matter'
// import marked from 'marked'
// import React from 'react'
import fs from 'fs'
import { assert } from 'console'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

import {PAGE_TYPE, PAGE_HEADERS, PAGES_TYPES, LANG_LIST} from './constants'
import page from '../pages/[lang]/[page]/[blog]/[catalog]'

/////////////////  sting utis section 

const __splitTags = (tags) => {
  const tagList = tags.split(',').map( item => {
    return item.trim()
  })
  return tagList
}


//  add strTags to arrTags
const __addTags = (arrTags, strTags) => {
  const tags = __splitTags(strTags)
  tags.forEach( item => {
    arrTags[item]=''
  })
  return arrTags
}

/////////////////     file and uri section 
const __getUri = ({lang, section}) => {
  assert(lang, 'lang must be set')
  assert(section, 'section must be set')
  const uri = path.join(CONTENT_DIR, lang, section)
  return uri
}

const __getCatalogPaths = ({lang, section}) => {
  assert(lang, 'lang must be set')
  assert(section, 'section must be set')
  const uri = __getUri({lang, section})
  console.log(uri)
  const dir = fs.readdirSync(uri)
  return dir.reduce( (arr, item) => {
    if (!item.endsWith('.md')) {
      return arr
    }
    arr.push( path.join(uri, item) )
    return arr
  }, [] )
}

////////////////// external API ////////////////////

const getSectionTags = ({lang, section}) => {
  let __tags = []
  const dir = __getCatalogPaths({lang, section})
  dir.map( item => {
    console.log(item)
    const fileContent = fs.readFileSync(item).toString();
    const meta = matter(fileContent)
    __tags = __addTags(__tags, meta.data.tags)
  })
  const ret = Object.keys(__tags)
  return ret
}

module.exports = {
  getSectionTags
}
