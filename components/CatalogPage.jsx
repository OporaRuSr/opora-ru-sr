import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'
import TagLinks from './TagLinks'

export default function CatalogPage(props) {
    const {lang, payload} = props
    return (
      <Layout lang={lang} title={payload.meta.title}>
      <div className="oporaPageHead w-full px-3">
         <h1>{payload.meta.title}</h1>
      </div>
      <div className="oporaPageHead">
        <TagLinks tags={payload.pageTags}/>
      </div>
      <div className="oporaWhiteBlock lg:mx-5">
        <div className="">
          <div className="flex flex-col lg:flex-row">
           <div className="oporaDate">
            <p>{payload.datastr}</p>  
           </div>
           <div className="w-full lg:flex-none lg:mx-6 lg:mb-6 lg:w-1/2">
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
