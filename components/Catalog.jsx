import React from 'react'
import Layout from './Layout'

export default function Catalog({lang, payload}) {
  console.log('BlogPage props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      <h1>Каталог</h1>
    </Layout>
  )
}
