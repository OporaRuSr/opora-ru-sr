import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Blog = ({lang, payload}) => {
  // console.log('Blog payload: ', payload)
  return (
      <Layout lang={lang} title={payload.title}>
        
          <ul>
            {payload.links.map(function(post, id) {
              return (
                <li key={id}>
                  
                  
                  <div className="oporaWhiteBlock w-full flex flex-col lg:flex-row">
                    <div className="w-full mb-6 lg:mb-0 lg:w-1/3 lg:mr-6 text-center">
                    <Link href={post.url}>
                      <a>
                        <img className="w-full" src={post.newsimage} />
                      </a>
                    </Link>
                    </div>
                    <div className="w-full lg:ml-6 lg:w-2/3">
                     <div className="oporaDate"><p >08.09.2020</p>  </div>
                     <div className="oporaLinkNews my-6 hover:text-blue-800">
                      <Link href={post.url}>
                        <a>{post.title}</a>
                      </Link>
                     </div>
                     <div className="flex">{post.description}</div>
                   </div>
                  </div> 
                  
                </li>
              )
            })}
          </ul>
        
       </Layout>
  )
}



export default Blog
