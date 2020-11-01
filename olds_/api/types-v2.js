import {SECTIONS_TYPE_LIST, LANG_LIST} from './constants'

const getSectionType = (name) => {
  if (SECTIONS_TYPE_LIST[name]) {
    return SECTIONS_TYPE_LIST[name].type
  }
  return 'UNDEFINED'
}

const getLangLinks = () => {
  return LANG_LIST.map( item => '/' + item)
}

const getPageLinks = (selectType=null) => {
  const ret = []
  getLangLinks().forEach( item => {
    Object.keys(SECTIONS_TYPE_LIST).forEach(item2=>{
      if (!selectType) {
        ret.push(`${item}/${item2}`)
        return
      }
      if (SECTIONS_TYPE_LIST[item2].type === selectType) {
        ret.push(`${item}/${item2}`)
      }
    })
  })
  return ret
}

module.exports = {
    getSectionType,
    getLangLinks,
    getPageLinks
}
