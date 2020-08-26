import Layout from './Layout'

const Page = ({lang, payload}) => {
  return (
      <Layout lang={lang} title={payload.title}>
        <h1>{lang}</h1>
        {payload.content}
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
