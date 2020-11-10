import {getAllPaths} from '../api'
import RoutePage from '../components/RoutePage'

export default RoutePage

export async function getStaticPaths() {
  console.log('[getStaticPaths]')
  const paths = await getAllPaths()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(props) {
  console.log('[getStaticProps]', props)
  return {
    props: {
      params: props.params,
      payload: {}
    }
  }
}
