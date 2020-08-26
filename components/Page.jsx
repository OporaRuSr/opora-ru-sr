import Layout from './Layout'

const Page = ({lang, payload}) => {
  return (
      <Layout lang={lang} title={payload.title}>
        <h1>{lang}</h1>
        {payload.content}
       </Layout>
  )
}

export default Page
