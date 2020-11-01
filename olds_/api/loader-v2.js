import {PAGE_TYPE} from './constants'

import {getSectionType} from './types-v2'
import {getPageData, getSectionData} from './api-v2'

const __getPagePayload = (props) => {
  const {lang, name} = props
  console.log('__getPagePayload', props)
  return getPageData({lang, section: 'pages', name})
}

const __getBlogPayload = (props) => {
  const {lang, section} = props
  return getSectionData({lang, section})
}

const getPayload = (props) => {

  props = Object.assign({}, {
    lang: 'ru',
    section: 'index',
    subsection: '',
    name: 'index'
  }, props)

  props.type = getSectionType(props.section)

  switch (props.type) {
    case PAGE_TYPE.PAGE:
      props.payload = __getPagePayload(props)
      break
    case PAGE_TYPE.BLOG:
      props.payload = __getBlogPayload(props)
      break  
    default:
      props.payload = {}
      break
  }

  return {
    props
  }
}

module.exports = {
  getPayload
}
