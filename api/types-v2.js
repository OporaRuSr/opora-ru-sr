import {SECTIONS_TYPE_LIST} from './constants'

const getSectionType = (name) => {
  return SECTIONS_TYPE_LIST[name].type
}

module.exports = {
    getSectionType
}
