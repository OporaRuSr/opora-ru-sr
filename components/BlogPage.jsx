import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'

export default function BlogPage({lang, payload}) {
  // console.log('BlogPage props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.meta.title}>
      
      
      <div className="oporaPageHead w-full mx-3">
         <h1>{payload.meta.title}</h1>
      </div>   
      <div className="oporaWhiteBlock w-full lg:mx-5">
        <div className="">
          <div className="flex flex-col lg:flex-row">
           <div className="oporaDate">
            <p >08.09.2020</p>  
           </div>
           <div className="w-full lg:flex-none lg:mx-6 lg:w-1/2">
            
             <img className="w-full" src={payload.meta.newsimage} />
           </div>
           <div className="text-base my-6 mr-6 lg:mt-0">
              {payload.meta.description}
           </div>
          </div>
          <div className="">
              <ReactMarkdown source={payload.content} />
          </div>


        </div>
      </div>

    </Layout>
  )
}
