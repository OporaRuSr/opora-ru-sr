import React from 'react'
import Layout from './Layout'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

const TagList = ({tags}) => {
    return (
      <ul className="w-full lg:w-1/4">
        <div className="w-full flex flex-wrap lg:flex-col text-lg mb-5">
        {
          tags.map(function(tag, id) {
            return (
              <div key={id} className="ml-5">
                <li>
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

export default function CatalogPage(props) {
    const {lang, payload} = props
    return (
        <Layout lang={lang} title={payload.meta.title}>
          <div className="oporaPageHead">
            <h1>{payload.meta.title}</h1>
          </div>
          <div className="oporaImage">
            <img src={payload.meta.newsimage} />
          </div>
          <div className="oporaText">
            <ReactMarkdown source={payload.content} />
          </div>
          <div className="oporaDescription">
            {payload.meta.description}
          </div>
          <div className="oporaTagListPage">
            <TagList tags={payload.pageTags}/>
          </div>
        </Layout>
    )
}
