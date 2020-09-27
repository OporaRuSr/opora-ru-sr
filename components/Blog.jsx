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
                  
                  <div className="flex justify-center w-full">
                  <div className="flex flex-col lg:flex-row lg:w-1200 justify-center lg:justify-start shadow-md mb-5 bg-white">
                    <div className="w-full m-6 my-8 lg:w-1/3 lg:mx-6 text-center">
                    <Link href={post.url}>
                      <a>
                        <div><img src={post.newsimage} /></div>
                      </a>
                    </Link>
                    </div>
                    <div className="w-full mx-6 mb-8 lg:mt-8 lg:w-2/3 text-xl">
                     <div><p >08.09.2020</p>  </div>
                     <div className="my-6 text-blue-600 underline font-bold hover:text-blue-800">
                      <Link href={post.url}>
                        <a>{post.title}</a>
                      </Link>
                     </div>
                     <div className="text-lg">{post.description}</div>
                   </div>
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
