import {getLangLinks, getSectionLinks, getPageLinks} from '../libs/import'

const getAllPaths = () => {
  console.log('----- getAllPaths ()')
  const langs = getLangLinks()
  const sections = getSectionLinks(langs)
  const pages = getPageLinks(sections)
  return langs.concat(sections).concat(pages)
}

module.exports = {
  getAllPaths
}
