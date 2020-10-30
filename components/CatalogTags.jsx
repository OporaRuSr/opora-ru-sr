import React from 'react'
import Layout from './Layout'
import TagList from './TagList'

export default function CatalogTags(props) {
  const {lang, payload} = props
  return (
    <Layout lang={lang} title={payload.title}>
      <div className="oporaPageHead w-full"><h1>{payload.title}</h1></div>
      <div className="flex flex-wrap w-full">
        <TagList tags={payload.pageTags}/>
      </div>
    </Layout>
  )
}
