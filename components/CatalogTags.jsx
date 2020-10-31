import React from 'react'
import Layout from './Layout'
import TagList from './TagList'
import PageList from './PageList'

export default function CatalogTags(props) {
  const {lang, payload} = props
  // console.log('--pageList', payload.pageList)
  return (
    <Layout lang={lang} title={payload.title}>
      <div className="oporaPageHead w-full"><h1>{payload.title}</h1></div>
      <div className="flex flex-wrap w-full">
        <TagList tags={payload.pageTags}/>
        <div className="w-full lg:w-3/4">
          <PageList list={payload.pageList}/>
        </div>
      </div>
    </Layout>
  )
}
