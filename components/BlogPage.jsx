import React from 'react'
import Layout from './Layout'

export default function BlogPage({lang, payload}) {
  console.log('BlogPage props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      <h1>{lang}</h1>
      <h1>Страничка блога</h1>
      <h2>{payload.title}</h2>
      {payload.content}
    </Layout>
  )
}
