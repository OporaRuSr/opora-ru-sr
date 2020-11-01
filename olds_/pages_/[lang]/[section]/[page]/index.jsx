import {getPageLinks} from '../../../../api/types-v2'

import {getPayload} from '../../../../api/loader-v2'
import {getPage} from '../../../../views'

export default function Page (payload) {
  return getPage(payload)
}

export async function getStaticPaths() {
  const paths = []
  // await getPageLinks()
  // console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(props) {
  console.log('[page]', props)
  // const lang = props.params.lang
  // const section = props.params.section
  // return getPayload({lang, section})
  return {}
}

// [lang]/[section]/
// [lang]/[section]/[page]
// [lang]/[section]/tags
// [lang]/[section]/tag/[tag]
