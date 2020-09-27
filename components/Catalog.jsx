import React from 'react'
// import { useRouter } from 'next/router'
import Layout from './Layout'
import Link from 'next/link'

export default function Catalog(props) {
  const {lang, payload} = props
  // const router = useRouter()
  // console.log('Catalog router:', router.query)
  // console.log('Catalog props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      <div className="w-full flex flex-wrap justify-center">

      <div className="w-full lg:w-1200 mt-5 text-center text-blue-700 text-xl"><h1>Каталог компаний</h1></div>

      <div className="flex flex-wrap mt-5 w-full lg:w-1200">
      <div className="w-1/4">
        <ul>
          {
            payload.tags.map(function(tag, id) {
              return (
                <li key={id}>
                  <Link href={tag.link}><a>#{tag.name}</a></Link>
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
                    <div className="bg-white mb-5 shadow-md">
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

      </div>
    </Layout>
  )
}
