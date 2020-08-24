import Layout from './Layout'

export default function Page({lang, uri}) {
  return (
      <Layout lang={lang} title={'My Home nlog'}>
        <h1>{lang}</h1>
        <h1>{uri}</h1>
        {/*<Post title={page.title} content={page.content}/>*/}
       </Layout>
  )
}
