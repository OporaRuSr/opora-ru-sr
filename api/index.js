import {getLangLinks, getSectionLinks, getPageLinks} from '../libs/import'

const getAllPaths = () => {
  console.log('----- getAllPaths ()')
  const root = ['/']
  const langs = getLangLinks()
  const sections = getSectionLinks(langs)
  const pages = getPageLinks(sections)
  return root.concat(langs).concat(sections).concat(pages)
}

module.exports = {
  getAllPaths
}
