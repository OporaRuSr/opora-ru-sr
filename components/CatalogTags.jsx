import React from 'react'
import Layout from './Layout'
import TagLinks from './TagLinks'

export default function CatalogTags(props) {
  const {lang, payload} = props
  return (
    <Layout lang={lang} title={payload.title}>
      <div className="oporaPageHead w-full px-3">
         <h1>{payload.title}</h1>
      </div>
      <div className="oporaPageHead">
        <TagLinks tags={payload.pageTags}/>
      </div>
      <h1>TagList</h1>
    </Layout>
  )
}
