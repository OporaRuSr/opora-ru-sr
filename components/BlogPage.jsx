import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'

export default function BlogPage({lang, payload}) {
  // console.log('BlogPage props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      <h1>1111{payload.title}</h1>
      <ReactMarkdown source={payload.content} />
    </Layout>
  )
}
