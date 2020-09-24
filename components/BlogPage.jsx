import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'

export default function BlogPage({lang, payload}) {
  // console.log('BlogPage props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.meta.title}>
      <div className="w-full flex flex-wrap justify-center">
      
      <div className="w-full lg:w-3/4 mt-5 mx-3 text-center text-blue-700 text-xl">
         <h1>{payload.meta.title}</h1>
      </div>   
      <div className="w-full my-5 py-8 lg:mx-5 bg-white shadow-md lg:w-3/4">
        <div className="mx-8 ">
          <div className="flex flex-col lg:flex-row">
           <div className="text-xl">
            <p >08.09.2020</p>  
           </div>
           <div className="w-full lg:flex-none lg:mx-6 mb-6 lg:w-1/2">
            
             <img src={payload.meta.newsimage} />
           </div>
           <div className="text-base m-6">
              {payload.meta.description}
           </div>
          </div>
          <div className="text-lg">
              <ReactMarkdown source={payload.content} />
          </div>


        </div>
      </div>

      </div>
    </Layout>
  )
}
