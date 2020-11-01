import React from 'react'
import Link from 'next/link'

const Blog = ({payload}) => {
  console.log(payload)
  return (
      <>
        <ul>
          {payload.pages.map(function(post, id) {
            return (
              <li key={id}>
                <div className="oporaWhiteBlock flex flex-col lg:flex-row">
                  <div className="oporaImgNews lg:mb-0 lg:w-1/3 lg:mr-6">
                    <Link href={post.url}>
                      <a>
                        <img className="w-full" src={post.newsimage} />
                      </a>
                    </Link>
                  </div>
                  <div className="w-full lg:ml-6 lg:w-2/3">
                    <div className="oporaDate"><p>{post.datastr}</p></div>
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
       </>
  )
}

export default Blog
