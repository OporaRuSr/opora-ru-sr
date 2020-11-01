import {getAllPaths} from '../api'

export default function page (props) {
  console.log('page:', props)
  if (!props.payload) {
    return (
      <h1>FUCK NEXTJS!!!</h1>
    )
  }
  return (
    <h1>BABUSHKA</h1>
  )
}

export function getStaticPaths() {
  console.log('[getStaticPaths]')
  const paths = getAllPaths()
  console.log(paths)
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(props) {
  console.log('[getStaticProps]', props)
  // const lang = props.params.lang
  // const section = props.params.section
  // return getPayload({lang, section})
  return {
    props: {
      payload: {}
    }
  }
}
