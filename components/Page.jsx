import Layout from './Layout'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const Page = ({lang, payload}) => {
  return (
      <Layout lang={lang} title={payload.title}>
        <h1>{payload.title}</h1>
        <ReactMarkdown source={payload.content} />
       </Layout>
  )
}

export default Page
