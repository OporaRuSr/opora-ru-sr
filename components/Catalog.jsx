import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Catalog({lang, payload}) {
  console.log('Catalog props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      

      <div className="oporaPageHead w-full"><h1>Каталог компаний</h1></div>

      <div className="flex flex-wrap w-full">
      <div className="w-1/4">
        <ul>
          {
            payload.tags.map(function(tag, id) {
              return (
                <li key={id}>
                  <Link href={tag.name}><>#{tag.link}</></Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="w-3/4">
        <ul>
        {
          payload.links.map(function(post, id) {
            return (
              <li key={id}>
                <Link href={post.url}>
                  <a>
                    <div className="oporaWhiteBlock">
                      <img src={post.newsimage} />
                      <div>{post.title}</div>
                      <div>{post.description}</div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
      </div>

      
    </Layout>
  )
}
