import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'

export default function BlogPage({lang, payload}) {
  // console.log('BlogPage props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.meta.title}>
      <div className="w-full mt-5 text-center text-blue-700 text-xl">
         <h1>{payload.meta.title}</h1>
      </div>   
      <div className=" my-5 py-8 lg:mx-5 bg-white shadow-md">
        <div className="mx-8 ">
          <div className="text-xl">
            <p >08.09.2020</p>  
          </div>
          <div>
            {payload.meta.description}
            <img src={payload.meta.newsimage} />
          </div>
          <div className="text-lg">
              <ReactMarkdown source={payload.content} />
          </div>


        </div>
      </div>

    </Layout>
  )
}
