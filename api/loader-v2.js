import {PAGE_TYPE} from './constants'

import {getSectionType} from './types-v2'
import {getPageData} from './api-v2'

const __getPagePayload = (props) => {
  console.log('__getPagePayload', props)
  return getPageData(props)
}

const getPayload = (props) => {

  props = Object.assign({}, {
    lang: 'ru',
    section: 'pages',
    subsection: '',
    name: 'index'
  }, props)

  console.log('getPayload', props)

  const pageType = getSectionType(props.section)

  let payload = {}

  switch (pageType) {
    case PAGE_TYPE.PAGE: 
      payload = __getPagePayload(props)
      break
    default:
      payload = {}
      break
  }

  props.type = pageType
  props.payload = payload

  return {
    props
  }
}

module.exports = {
  getPayload
}
