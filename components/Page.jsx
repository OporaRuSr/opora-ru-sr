import Layout from './Layout'
import { getPage } from '../api'

const Page = (props) => {
  console.log('Page: ', props)
  const {lang, slug} = props
  const page = getPage({lang, slug})
  return (
      <Layout lang={lang} title={'My Home nlog'}>
        <h1>{lang}</h1>
        <h1>{slug}</h1>
        {/*<Post title={page.title} content={page.content}/>*/}
       </Layout>
  )
}

export default Page

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { lang: 'sr', uri: 'index' } },
//       { params: { lang: 'sr', uri: 'news' } },
//       { params: { lang: 'sr', uri: 'cases' } },
//       { params: { lang: 'sr', uri: 'about' } },
//       { params: { lang: 'sr', uri: 'catalog' } },
//       { params: { lang: 'ru', uri: 'index' } },
//       { params: { lang: 'ru', uri: 'news' } },
//       { params: { lang: 'ru', uri: 'cases' } },
//       { params: { lang: 'ru', uri: 'about' } },
//       { params: { lang: 'ru', uri: 'catalog' } }
//       ],
//     fallback: true
//   }
// }
//
// export async function getStaticProps(context) {
//   console.log(context)
//   const {lang, uri} = context.params
//   return {
//     props: {lang, uri}
//   }
// }
