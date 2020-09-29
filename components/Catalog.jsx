import React from 'react'
// import { useRouter } from 'next/router'
import Layout from './Layout'
import Link from 'next/link'

const TagList = ({tags}) => {
  return (
    <ul className="w-full lg:w-1/4">
      <div className="w-full flex flex-wrap lg:flex-col text-lg mb-5">
      {
        tags.map(function(tag, id) {
          return (
            <div className="ml-5">
              <li key={id}>
                  <Link href={tag.link}><a>#{tag.name+' '}</a></Link>
                  <Link href={tag.link}><a>#{tag.name+' '}</a></Link>
                  <Link href={tag.link}><a>#{tag.name+' '}</a></Link>
                  <Link href={tag.link}><a>#{tag.name+' '}</a></Link>
                  <Link href={tag.link}><a>#{tag.name+' '}</a></Link>
              </li>
            </div>
          )
        })
      }
      </div>
    </ul>
  )
}

export default function Catalog(props) {
  const {lang, payload} = props
  // const router = useRouter()
  // console.log('Catalog router:', router.query)
  // console.log('Catalog props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      <div className="oporaPageHead w-full"><h1>Каталог компаний</h1></div>
      <div className="flex flex-wrap w-full">
        <TagList tags={payload.tags} />
      <div className="w-full lg:w-3/4">
        <ul>
        {
          payload.links.map(function(post, id) {
            return (
              <li key={id}>
                <Link href={post.url}>
                  <a>
                    <div className="oporaWhiteBlock flex flex-col lg:flex-row">
                      <div className="oporaImgNews lg:mb-0 lg:w-1/3 lg:mr-6">
                        <img className="w-full" src={post.newsimage} />
                      </div>
                      <div className="w-full lg:ml-6 lg:w-2/3">
                        <div className="oporaLinkNews ">{post.title}</div>
                        <div>{post.description}</div>
                      </div>
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
