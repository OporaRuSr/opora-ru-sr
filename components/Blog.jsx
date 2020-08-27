import Layout from './Layout'

const Blog = ({lang, path}) => {
  return (
      <Layout lang={lang} title={path}>
        <h1>ЭТО БЛОГ</h1>
        <h2>{path}</h2>
       </Layout>
  )
}

export default Blog
