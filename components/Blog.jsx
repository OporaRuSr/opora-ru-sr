import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Blog = ({lang, payload}) => {
  // console.log('Blog payload: ', payload)
  return (
      <Layout lang={lang} title={payload.title}>
        <div className="mt-5"> 
          <ul>
            {payload.links.map(function(post, id) {
              return (
                <li key={id}>
                  
                  <div className="flex flex-col lg:flex-row justify-center lg:justify-start shadow-md mb-5 bg-white">
                    <div className="w-auto m-3 my-8 lg:w-1/4 lg:m-8 text-center">
                    <Link href={post.url}>
                      <a>
                        <div><img src={post.newsimage} /></div>
                      </a>
                    </Link>
                    </div>
                    <div className="m-3 mb-8 lg:m-8 lg:w-3/4 text-xl">
                     <div><p >08.09.2020</p>  </div>
                     <div className="my-6 text-blue-600 underline font-bold hover:text-blue-800">
                      <Link href={post.url}>
                        <a>{post.title} </a>
                      </Link>
                     </div>
                     <div className="text-lg">{post.description}</div>
                   </div>
                  </div>  
                </li>
              )
            })}
          </ul>
        </div>
       </Layout>
  )
}



export default Blog
