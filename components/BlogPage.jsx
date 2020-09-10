import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

export default function BlogPage(props) {
  console.log('BlogPage props: ', props)
  return (
    <h1>BlogPage</h1>
    // <Layout lang={lang} title={payload.title}>
    //   <h1>Страничка блога</h1>
    //   <div>
    //     <h2>{payload.title}</h2>
    //   </div>
    // </Layout>
  )
}
