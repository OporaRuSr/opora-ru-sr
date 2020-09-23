import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Catalog({lang, payload}) {
  console.log('Catalog props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      <h1>Каталог компаний</h1>
      <div>
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
      <div>
        <ul>
        {
          payload.links.map(function(post, id) {
            return (
              <li key={id}>
                <Link href={post.url}>
                  <a>
                    <div>
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
    </Layout>
  )
}
