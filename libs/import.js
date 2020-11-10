import {LANG_LIST, SECTIONS_LIST} from './config'

const getLangLinks = () => {
  return LANG_LIST.map( item => '/' + item)
}

const getSectionLinks = (langs) => {
  const ret = []
  langs.forEach( item => {
    Object.keys(SECTIONS_LIST).forEach( item2 =>{
        ret.push(`${item}/${item2}`)
      })
    })
  return ret
}

const getPageLinks = (sections) => {
  const ret = []
  sections.forEach( item => {
// RND !!!
    // console.log(item)
  })
  return ret
}

module.exports = {
  getLangLinks,
  getSectionLinks,
  getPageLinks
}
