import {getLangLinks} from '../../api/types-v2'

import {getPayload} from '../../api/loader-v2'
import {getPage} from '../../views'

export default function Page (payload) {
  return getPage(payload)
}

export async function getStaticPaths() {
  return {
    paths: getLangLinks(),
    fallback: false
  }
}

export async function getStaticProps(props) {
  const lang = props.params.lang
  return getPayload({lang})
}
