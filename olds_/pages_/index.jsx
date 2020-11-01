
import {getPayload} from '../api/loader-v2'
import {getPage} from '../views'

export default function (payload) {
  return getPage(payload)
}

export async function getStaticProps() {
  return getPayload()
}
