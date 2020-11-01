import matter from 'gray-matter'
import fs from 'fs'
import assert from 'assert'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

/////////////////  sting utis section 

const __splitTags = (tags) => {
  const tagList = tags.split(',').map( item => {
    return item.trim()
  })
  return tagList
}

//  arrTags[] <- strTags
const __addTags = (arrTags, strTags = '') => {
  const tags = __splitTags(strTags)
  tags.forEach( item => {
    arrTags[item]=''
  })
  return arrTags
}

////////////////// some logic utils 

const __addPageInfo = (arr, url, data, filter = undefined) => {
  const item = Object.assign({},
    { 
      url,
      datastr: __getDataFromName(url)
    }, data)
  // console.log('__addPageInfo', filter)
  if (!filter) {
    arr.push(item)
  } else if ( data.tags.includes(filter)) {
    arr.push(item)
  }
  return arr
}

const __getDataFromName = (name) => {
  const part = path.basename(name).replace('.md','').split('-')
  return `${part[2]}.${part[1]}.${part[0]} ${part[3]}:${part[4]}`
}

const __getBaseName = (filePath) => {
  return path.basename(filePath).replace('.md','')
}

///////////////// file and uri section
const __getUrl = ({lang, section, name=''}) => {
  assert(lang, 'lang must be set')
  assert(section, 'section must be set')
  const uri = path.join('/', lang, section, name)
  return uri
}

const __getUri = ({lang, section, name=''}) => {
  assert(lang, 'lang must be set')
  assert(section, 'section must be set')
  const uri = path.join(CONTENT_DIR, lang, section, name)
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

const getPageData = ({lang, section, name}) => {
  const uri = __getUri({lang, section, name})+'.md'
  const fileContent = fs.readFileSync(uri).toString();
  const meta = matter(fileContent)
  console.log('getPageData from', uri)
  // console.log(meta)
  return {
    meta: meta.data,
    content: meta.content
  }
}

const getSectionData = ({lang, section, tag = ''}) => {
  assert(lang, 'lang must be set')
  assert(section, 'section must be set')
  let __tags = []
  let __pages = []
  const dir = __getCatalogPaths({lang, section})
  dir.map( item => {
    console.log(item)
    const name = __getBaseName(item)
    const url = __getUrl({lang, section, name})
    const fileContent = fs.readFileSync(item).toString();
    const meta = matter(fileContent)
    __tags = __addTags(__tags, meta.data.tags)
    __pages = __addPageInfo(__pages, url, meta.data, tag)
  })
  return {
    tags: Object.keys(__tags),
    pages: __pages
  }
}

module.exports = {
  getSectionData,
  getPageData
}
