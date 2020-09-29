import Layout from './Layout'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const Page = ({lang, payload}) => {
  return (
      <Layout lang={lang} title={payload.title}>
        <div className="oporaPageHead w-full px-3">
          <h1>{payload.title}</h1>
        </div>
        <div className="oporaWhiteBlock lg:mx-5">
          <ReactMarkdown source={payload.content} />
        </div>
       </Layout>
  )
}

export default Page
